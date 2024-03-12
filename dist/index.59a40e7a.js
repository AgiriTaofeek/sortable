// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aP7aF":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d7fe96c059a40e7a";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lRBv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _sortable = require("./sortable");
var _sortableDefault = parcelHelpers.interopDefault(_sortable);
//sortable
const sortable = new (0, _sortableDefault.default)({
    onSort: (state)=>{
        // console.log(state); //This is supposed to log all the state data but as soon as the dragend event is fired, the state data are all reset as we specified in our code but we can create an new object and add them to it
        // let obj = { ...state };
        // console.log(obj); //We can get all the data now
        //Extracting the data from the sortable
        const items = [];
        for (let li of state.sortableListParent.children)items.push(li.innerText.split(" ")[1].trim());
        //Update json textarea value
        document.getElementById("json").value = JSON.stringify(items, null, 2); //JSON.stringify() to convert the array to JSON
    }
}); //NOTE - tabindex note
 //tabindex = "-1" => This is used for element that usually not in the DOM by default or tab order and we can programmatically focus on it with focus() method e.g document.querySelector('#modal).focus()
 //tabindex="0" => This is used for element that are already in the DOM normally and tab order and we can also focus on them programmatically
 //tabindex="5" => Any tabindex value greater than 0 acts like order property in flexBox where they immediately gets focused first in the whole webpage

},{"./sortable":"hC6G4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hC6G4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Sortable {
    /**
   * Instantiate a new sortable
   * @param {Options} Options - Component configuration options
   * @returns {Sortable}
   */ constructor(Options){
        /**
     * Sortable component configuration
     * @type {Options}
     */ this.config = Object.assign({
            attr: "data-sortable",
            assistiveText: ".assistive",
            sortableContainer: ".sortable",
            draggingClass: "dragging",
            draggingElementClass: "active-drag",
            onSort: (state)=>{}
        }, Options);
        //Initialize component
        this.init();
        return this;
    }
    /**
   * Initialize component
   * @returns {void}
   */ init() {
        //NOTE - Select custom drag image
        // const img = document.querySelector(".custom-img");
        //It is a good practice to separate concerns hence why we are keeping the state in an easily accessible scope.
        /**
     * Component state
     * @type {stateData}
     */ this.state = {
            assistiveText: null,
            draggingElement: null,
            draggingIndex: undefined,
            sortableContainer: null,
            sortableListParent: null
        };
        //Event listeners
        document.addEventListener("dragstart", (e)=>this.start(e)); //user starts dragging an item
        document.addEventListener("dragover", (e)=>this.over(e)); //a dragged item is being dragged over a valid drop target, every few hundred milliseconds.
        document.addEventListener("dragend", (e)=>this.end(e)); //a drag operation ends (such as releasing a mouse button or hitting the Esc key)
        document.addEventListener("keydown", (e)=>this.keydown(e)); //Keydown event
    }
    /**
   * Dragstart listener
   * @param {DragEvent} e - Dragstart event
   * @returns {void}
   */ start(e) {
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
        this.state.sortableContainer = e.target.closest(this.config.sortableContainer);
        //Get assistive span
        this.state.assistiveText = this.state.sortableContainer.querySelector(this.config.assistiveText);
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
   */ over(e) {
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
   */ end(e) {
        //Remove classes (This comes before we clear the state because we can't remove the class from a sortableContainer with the value of null)
        this.state.sortableContainer.classList.remove(this.config.draggingClass);
        this.state.draggingElement.classList.remove(this.config.draggingElementClass);
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
   */ sort(target) {
        //Dragging upwards?
        //NOTE - Right when the 'dragstart' event is fired, the dragging element index from the sortableList has been determined and then we are going to compare that dragging element index with the drop target element index (i.e the element we are dragging over) and if the dragging element index is greater than the drop target element index, we are dragging up and vice versa.
        const draggingUpwards = this.getSortableIndex(target) < this.state.draggingIndex;
        //Remove draggable from the <ul></ul>
        //NOTE - Due to the fact that this method would be called a lot since it is in the over() method, it is best to traverse the dom once and as usual, we will do that in the start() method which runs once for performance sake
        this.state.sortableListParent.removeChild(this.state.draggingElement);
        //Add current draggable back to the <ul></ul> at a different position based on the drop target
        //NOTE - insertAdjacentElement() is used to insert an element which is already in the Dom and it returns that element passed as 2nd parameter hence why we are saving it again while insertAdjacentHtml creates the elements to insert from the HTML code that gets passed to it.
        this.state.draggingElement = target.insertAdjacentElement(draggingUpwards ? "beforebegin" : "afterend", this.state.draggingElement);
        //NOTE - The insertAdjacentElement method has a drawback as we have set it up above that won't allow us to drag and drop at the position above an adjacent drop target. Hence why we have to keep track of the sortables index like an array with the getSortableIndex method below to make it more flexible
        //We have to get the new index so that it works every time and  not once
        this.state.draggingIndex = this.getSortableIndex(this.state.draggingElement);
        //Describe assistive text
        this.describe(); //This will also voice out item grabbed because draggingElement is truthy
        //Fire onSort event
        this.config.onSort(this.state);
    }
    /**
   * Get the given element sortable index
   * @param {HTMLElement} el -  Sortable/Draggable list element
   * @returns {number}
   */ getSortableIndex(el) {
        //No sortable list parent, return 0 by default, hence, we are not dragging because we set that state when we the 'dragstart' event is fired
        if (!this.state.sortableListParent) return 0;
        //Get dragging element index from the sortableListParent
        for(let i = 0; i < this.state.sortableListParent.children.length; i++){
            if (this.state.sortableListParent.children[i] === el) return i;
        }
        //Nothing found (future proof of error)
        return 0;
    }
    /**
   * Keydown event listener
   * @param {KeyboardEvent} e - keydown event object
   */ keydown(e) {
        //Not a sortable
        if (!e.target.matches(`[${this.config.attr}]`)) return;
        //Grab or Drop using the space-bar key
        if (e.key === " ") {
            //Prevent default functionality
            e.preventDefault();
            //Grab on keying space-bar if our focus tab is not on an actively dragged element
            if (!this.state.draggingElement) this.start(e); //Since we've already written the functionality for a dragstart event we can reuse it here and also because whenever our focus tab is on an element and then we keyed on focused element,  the e.target is going to be that element.
            else //Drop on keying space-bar if our focus tab is on an actively dragged element
            this.end(e);
        } else if (this.state.draggingElement && (e.key === "ArrowUp" || e.key === "ArrowDown")) {
            //Sort on Up/Down arrows and we also need to make sure we are dragging an element before we sort with the Up and Down arrow key hence, why we needed to check in the if/else state above. It basically means that we must have keyed on the space-bar before we are allowed to arrow Up/Down
            e.preventDefault();
            //To sort like we did above, we move pass a drop target to the sort() method hence we have to get our target based on whatever key we press
            const target = e.target[e.key === "ArrowUp" ? "previousElementSibling" : "nextElementSibling"];
            //Sort if target is found because target can be null as the last dragging element won't have a nextSibling and the first dragging element won't have a previousSibling
            if (target) this.sort(target); //There is a problem after doing this and that is because calling the sort() method removes the dragging element with the removeChild() method from the DOM and inserts a new element with the insertAdjacentElement() method which makes it lose keyboard focus which prompts the code below
            //focus on new dragging element
            this.state.draggingElement.focus();
        } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
            //Allow using arrow Up/Down event without a having an actively dragging element
            e.preventDefault();
            //Get focusables
            const focusables = e.target[e.key === "ArrowUp" ? "previousElementSibling" : "nextElementSibling"];
            if (focusables) focusables.focus();
        }
    }
    /**
   * Update assistive screen reader text
   * @returns {void}
   */ describe() {
        //Not dragging
        if (!this.state.draggingElement) this.state.assistiveText.textContent = `Item dropped at position ${this.state.draggingIndex + 1}`;
        else //Describe dragging state
        this.state.assistiveText.textContent = `Item grabbed, current position is ${this.state.draggingIndex + 1} of ${this.state.sortableListParent.children.length}. Use up or down arrows to change position, space-bar to drop`;
    }
} /**
 * Component configuration options
 * @typedef {Object} Options
 * @property {string} attr - Draggable elements attribute name
 * @property {string} draggingClass - During the dragstart event, this CSS class is added to the parent ul element of the sortable(draggable) list, which is then removed upon the dragend event.
 * @property {string} draggingElementClass - During the dragstart event, this CSS class is added to the current draggable list element, which is then removed upon the dragend event.
 * @property {onSort} onSort - Called on each dragover event(i.e sort event) with access to current state data
 */  /**
 * onSort callback function
 * @callback onSort
 * @param {stateData} state - Component state data
 *
 */  /**
 * State data
 * @typedef {Object} stateData
 * @property {HTMLElement} draggingElement - Currently dragged element
 * @property {string} assistiveText - Current dragged assistive text
 * @property {number} draggingIndex - Currently dragged element index
 * @property {HTMLElement} sortableContainer - Sortable list container usually a div element
 * @property {HTMLElement} sortableListParent - Sortable/draggable list closest parent usually ul element
 */ 
exports.default = Sortable;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["aP7aF","8lRBv"], "8lRBv", "parcelRequireb7a2")

//# sourceMappingURL=index.59a40e7a.js.map
