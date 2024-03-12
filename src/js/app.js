import Sortable from "./sortable";

//sortable

const sortable = new Sortable({
  onSort: (state) => {
    // console.log(state); //This is supposed to log all the state data but as soon as the dragend event is fired, the state data are all reset as we specified in our code but we can create an new object and add them to it
    // let obj = { ...state };
    // console.log(obj); //We can get all the data now

    //Extracting the data from the sortable
    const items = [];
    for (let li of state.sortableListParent.children) {
      items.push(li.innerText.split(" ")[1].trim());
    }

    //Update json textarea value
    document.getElementById("json").value = JSON.stringify(items, null, 2); //JSON.stringify() to convert the array to JSON
  },
});

//NOTE - tabindex note
//tabindex = "-1" => This is used for element that usually not in the DOM by default or tab order and we can programmatically focus on it with focus() method e.g document.querySelector('#modal).focus()
//tabindex="0" => This is used for element that are already in the DOM normally and tab order and we can also focus on them programmatically
//tabindex="5" => Any tabindex value greater than 0 acts like order property in flexBox where they immediately gets focused first in the whole webpage
