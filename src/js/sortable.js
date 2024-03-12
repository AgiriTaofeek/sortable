export default class Sortable {
  /**
   * Instantiate a new sortable
   * @param {Options} Options - Component configuration options
   * @returns {Sortable}
   */
  constructor(Options) {
    /**
     * Sortable component configuration
     * @type {Options}
     */
    this.config = Object.assign(
      {
        attr: "data-sortable",
        assistiveText: ".assistive",
        sortableContainer: ".sortable",
        draggingClass: "dragging",
        draggingElementClass: "active-drag",
        onSort: (state) => {},
      },
      Options
    );

    //Initialize component
    this.init();

    return this;
  }

  /**
   * Initialize component
   * @returns {void}
   */
  init() {
    //NOTE - Select custom drag image
    // const img = document.querySelector(".custom-img");
    //It is a good practice to separate concerns hence why we are keeping the state in an easily accessible scope.

    /**
     * Component state
     * @type {stateData}
     */
    this.state = {
      assistiveText: null,
      draggingElement: null,
      draggingIndex: undefined,
      sortableContainer: null,
      sortableListParent: null,
      //   img, //Custom drag image added to state
    };

    //Event listeners
    document.addEventListener("dragstart", (e) => this.start(e)); //user starts dragging an item
    document.addEventListener("dragover", (e) => this.over(e)); //a dragged item is being dragged over a valid drop target, every few hundred milliseconds.
    document.addEventListener("dragend", (e) => this.end(e)); //a drag operation ends (such as releasing a mouse button or hitting the Esc key)
    document.addEventListener("keydown", (e) => this.keydown(e)); //Keydown event
  }

  /**
   * Dragstart listener
   * @param {DragEvent} e - Dragstart event
   * @returns {void}
   */
  start(e) {
    // console.log("start", e.dataTransfer);
    //Not a sortable (e.target is the draggable/sortable element)
    if (!e.target.matches(`[${this.config.attr}]`)) return;

    //NOTE - Set custom drag image
    // e.dataTransfer.setDragImage(this.state.img, 10, 10);

    //Keep track of dragging element
    this.state.draggingElement = e.target;

    //Get sortable list parent i.e <ul></ul>
    this.state.sortableListParent = e.target.parentElement;

    //Get dragging index and it is very important we determine this in the 'dragstart' event(This is to help with the drawback of how we setup the insertAdjacentElement in the sort() method below)
    this.state.draggingIndex = this.getSortableIndex(e.target);

    //Get sortable container
    this.state.sortableContainer = e.target.closest(
      this.config.sortableContainer
    );

    //Get assistive span
    this.state.assistiveText = this.state.sortableContainer.querySelector(
      this.config.assistiveText
    );

    //Add classes
    this.state.sortableContainer.classList.add(this.config.draggingClass);
    this.state.draggingElement.classList.add(this.config.draggingElementClass);

    //Update assistive description
    this.describe(); //This should voice out item grabbed because draggingElement is truthy
  }
  /**
   * Dragover listener
   * @param {DragEvent} e - Dragover event
   * @returns {void}
   */
  over(e) {
    e.preventDefault(); //Allows dropping the grabbed element to a new position and it also prevents the ghost of the grabbing element to return to it's initial position

    //Overwrite the dropEffect cursor to "move" which is for when an item is moved to a new location just like our component does.
    e.dataTransfer.dropEffect = "move";

    //NOTE - Since our dragover event is bounded with the document element a small drag over any valid drop target i.e any element, could fire the event listener like a thousand times which is not good for performance at all hence why we have the early returns for some scenarios below

    //Not dragging anything,return and do nothing
    if (!this.state.draggingElement) return;

    //Dragging over self?
    if (this.state.draggingElement === e.target) return;

    //Not dragging over sortables (i.e draggable elements that we have specified the data attribute)
    if (!e.target.matches(`[${this.config.attr}]`)) return;

    //Not dragging over same sortable component?
    //NOTE - Due to this operation having performance issues, we are going to move it to the dragstart event by using another state property sortableContainer
    // if (
    //   e.target.closest(this.config.sortableContainer) !==
    //   this.state.draggingElement.closest(this.config.sortableContainer)
    // )
    //   return;

    //NOTE - Better approach
    if (!this.state.sortableContainer.contains(e.target)) return; //If the sortable container of the dragging element does not drag over any of it's sibling element, it means we are dragging in another sortable container hence return and do nothing.

    //Sort
    this.sort(e.target);
  }
  /**
   * Dragend listener
   * @param {DragEvent} e - Dragend event
   * @returns {void}
   */
  end(e) {
    //Remove classes (This comes before we clear the state because we can't remove the class from a sortableContainer with the value of null)
    this.state.sortableContainer.classList.remove(this.config.draggingClass);
    this.state.draggingElement.classList.remove(
      this.config.draggingElementClass
    );

    //clear state (After the dragging ends, reset the state properties)
    this.state.draggingElement = null;

    //Describe assistive text
    this.describe(); //This was added between the draggingElement and draggingIndex because we want it to still voice out the dragging position before we reset it to undefined

    this.state.draggingIndex = undefined;
    this.state.sortableContainer = null;
    this.state.sortableListParent = null;
  }

  /**
   * Order the sortable list
   * @param {HTMLElement} target -The drop target over which the draggable is held
   * @returns {void}
   */
  sort(target) {
    //Dragging upwards?
    //NOTE - Right when the 'dragstart' event is fired, the dragging element index from the sortableList has been determined and then we are going to compare that dragging element index with the drop target element index (i.e the element we are dragging over) and if the dragging element index is greater than the drop target element index, we are dragging up and vice versa.
    const draggingUpwards =
      this.getSortableIndex(target) < this.state.draggingIndex;

    //Remove draggable from the <ul></ul>
    //NOTE - Due to the fact that this method would be called a lot since it is in the over() method, it is best to traverse the dom once and as usual, we will do that in the start() method which runs once for performance sake
    this.state.sortableListParent.removeChild(this.state.draggingElement);

    //Add current draggable back to the <ul></ul> at a different position based on the drop target
    //NOTE - insertAdjacentElement() is used to insert an element which is already in the Dom and it returns that element passed as 2nd parameter hence why we are saving it again while insertAdjacentHtml creates the elements to insert from the HTML code that gets passed to it.
    this.state.draggingElement = target.insertAdjacentElement(
      draggingUpwards ? "beforebegin" : "afterend", //using the index to determine what position to drag and drop
      this.state.draggingElement
    );

    //NOTE - The insertAdjacentElement method has a drawback as we have set it up above that won't allow us to drag and drop at the position above an adjacent drop target. Hence why we have to keep track of the sortables index like an array with the getSortableIndex method below to make it more flexible

    //We have to get the new index so that it works every time and  not once
    this.state.draggingIndex = this.getSortableIndex(
      this.state.draggingElement
    );

    //Describe assistive text
    this.describe(); //This will also voice out item grabbed because draggingElement is truthy

    //Fire onSort event
    this.config.onSort(this.state);
  }
  /**
   * Get the given element sortable index
   * @param {HTMLElement} el -  Sortable/Draggable list element
   * @returns {number}
   */
  getSortableIndex(el) {
    //No sortable list parent, return 0 by default, hence, we are not dragging because we set that state when we the 'dragstart' event is fired
    if (!this.state.sortableListParent) return 0;

    //Get dragging element index from the sortableListParent
    for (let i = 0; i < this.state.sortableListParent.children.length; i++) {
      if (this.state.sortableListParent.children[i] === el) return i;
    }

    //Nothing found (future proof of error)
    return 0;
  }

  /**
   * Keydown event listener
   * @param {KeyboardEvent} e - keydown event object
   */
  keydown(e) {
    //Not a sortable
    if (!e.target.matches(`[${this.config.attr}]`)) return;

    //Grab or Drop using the space-bar key
    if (e.key === " ") {
      //Prevent default functionality
      e.preventDefault();

      //Grab on keying space-bar if our focus tab is not on an actively dragged element
      if (!this.state.draggingElement) {
        this.start(e); //Since we've already written the functionality for a dragstart event we can reuse it here and also because whenever our focus tab is on an element and then we keyed on focused element,  the e.target is going to be that element.
      } else {
        //Drop on keying space-bar if our focus tab is on an actively dragged element
        this.end(e);
      }
    } else if (
      this.state.draggingElement &&
      (e.key === "ArrowUp" || e.key === "ArrowDown")
    ) {
      //Sort on Up/Down arrows and we also need to make sure we are dragging an element before we sort with the Up and Down arrow key hence, why we needed to check in the if/else state above. It basically means that we must have keyed on the space-bar before we are allowed to arrow Up/Down
      e.preventDefault();

      //To sort like we did above, we move pass a drop target to the sort() method hence we have to get our target based on whatever key we press
      const target =
        e.target[
          e.key === "ArrowUp" ? "previousElementSibling" : "nextElementSibling"
        ];

      //Sort if target is found because target can be null as the last dragging element won't have a nextSibling and the first dragging element won't have a previousSibling
      if (target) this.sort(target); //There is a problem after doing this and that is because calling the sort() method removes the dragging element with the removeChild() method from the DOM and inserts a new element with the insertAdjacentElement() method which makes it lose keyboard focus which prompts the code below

      //focus on new dragging element
      this.state.draggingElement.focus();
    } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      //Allow using arrow Up/Down event without a having an actively dragging element
      e.preventDefault();

      //Get focusables
      const focusables =
        e.target[
          e.key === "ArrowUp" ? "previousElementSibling" : "nextElementSibling"
        ];

      if (focusables) focusables.focus();
    }
  }

  /**
   * Update assistive screen reader text
   * @returns {void}
   */
  describe() {
    //Not dragging
    if (!this.state.draggingElement) {
      this.state.assistiveText.textContent = `Item dropped at position ${
        this.state.draggingIndex + 1
      }`;
    } else {
      //Describe dragging state
      this.state.assistiveText.textContent = `Item grabbed, current position is ${
        this.state.draggingIndex + 1
      } of ${
        this.state.sortableListParent.children.length
      }. Use up or down arrows to change position, space-bar to drop`;
    }
  }
}

/**
 * Component configuration options
 * @typedef {Object} Options
 * @property {string} attr - Draggable elements attribute name
 * @property {string} draggingClass - During the dragstart event, this CSS class is added to the parent ul element of the sortable(draggable) list, which is then removed upon the dragend event.
 * @property {string} draggingElementClass - During the dragstart event, this CSS class is added to the current draggable list element, which is then removed upon the dragend event.
 * @property {onSort} onSort - Called on each dragover event(i.e sort event) with access to current state data
 */

/**
 * onSort callback function
 * @callback onSort
 * @param {stateData} state - Component state data
 *
 */

/**
 * State data
 * @typedef {Object} stateData
 * @property {HTMLElement} draggingElement - Currently dragged element
 * @property {string} assistiveText - Current dragged assistive text
 * @property {number} draggingIndex - Currently dragged element index
 * @property {HTMLElement} sortableContainer - Sortable list container usually a div element
 * @property {HTMLElement} sortableListParent - Sortable/draggable list closest parent usually ul element
 */
