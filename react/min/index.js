!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],e):e(t.NestedLink={},t.React)}(this,function(t,e){"use strict";var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function r(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var o=function(){return(o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},u=Array.prototype,i=Object.prototype;function a(t){if(t&&"object"==typeof t)switch(Object.getPrototypeOf(t)){case u:return f;case i:return c}return s}var s={clone:function(t){return t},map:function(t,e){return[]},remove:function(t){return t}},c={map:function(t,e){var n=[],r=t.value;for(var o in r)if(r.hasOwnProperty(o)){var u=e(t.at(o),o);void 0===u||n.push(u)}return n},remove:function(t,e){return delete t[e],t},clone:function(t){return o({},t)}},f={clone:function(t){return t.slice()},remove:function(t,e){return t.splice(e,1),t},map:function(t,e){for(var n=t.value.length,r=Array(n),o=0,u=0;o<n;o++){var i=e(t.at(o),o);void 0===i||(r[u++]=i)}return r.length===u||(r.length=u),r}},l=function(){function t(t){this.value=t}return t.value=function(t,e){return new p(t,e)},t.getValues=function(t){return m(t,"value")},Object.defineProperty(t.prototype,"current",{get:function(){return this.value},set:function(t){this.set(t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_changeToken",{get:function(){return this.value},enumerable:!0,configurable:!0}),t.getErrors=function(t){return m(t,"error")},t.hasErrors=function(t){for(var e in t)if(t.hasOwnProperty(e)&&t[e].error)return!0;return!1},t.setValues=function(t,e){if(e)for(var n in t){var r=O(n);if(e.hasOwnProperty(r)){var o=e[r];void 0===o||t[n].set(o)}}},t.prototype.onChange=function(t){var e=this;return new h(this,function(n){t(n),e.set(n)})},Object.defineProperty(t.prototype,"props",{get:function(){var t=this;return"boolean"==typeof this.value?{checked:this.value,onChange:function(e){return t.set(Boolean(e.target.checked))}}:{value:this.value,onChange:function(e){return t.set(e.target.value)}}},enumerable:!0,configurable:!0}),t.prototype.update=function(t,e){var n=t(this.clone(),e);void 0===n||this.set(n)},t.prototype.pipe=function(t){var e=this;return new h(this,function(n){var r=t(n,e.value);void 0===r||e.set(r)})},t.prototype.action=function(t){var e=this;return function(n){return e.update(t,n)}},t.prototype.equals=function(t){return new v(this,t)},t.prototype.enabled=function(t){return new y(this,t||"")},t.prototype.contains=function(t){return new d(this,t)},t.prototype.push=function(){var t=f.clone(this.value);Array.prototype.push.apply(t,arguments),this.set(t)},t.prototype.unshift=function(){var t=f.clone(this.value);Array.prototype.unshift.apply(t,arguments),this.set(t)},t.prototype.splice=function(){var t=f.clone(this.value);Array.prototype.splice.apply(t,arguments),this.set(t)},t.prototype.map=function(t){return a(this.value).map(this,t)},t.prototype.removeAt=function(t){var e=this.value,n=a(e);this.set(n.remove(n.clone(e),t))},t.prototype.at=function(t){return new g(this,t)},t.prototype.clone=function(){var t=this.value;return a(t).clone(t)},t.prototype.pick=function(){for(var t={},e=arguments.length?arguments:Object.keys(this.value),n=0;n<e.length;n++){var r=e[n];t[r]=new g(this,r)}return t},t.prototype.$links=function(){var t={},e=this.value;for(var n in e)e.hasOwnProperty(n)&&(t["$"+n]=new g(this,n));return t},t.prototype.check=function(t,e){return this.error||t(this.value)||(this.error=e||t.error||k),this},t}(),p=function(t){function e(e,n){var r=t.call(this,e)||this;return r.set=n,r}return r(e,t),e.prototype.set=function(t){},e}(l),h=function(t){function e(e,n){var r=t.call(this,e.value)||this;r.set=n;var o=e.error;return o&&(r.error=o),r}return r(e,t),e.prototype.set=function(t){},e}(l),v=function(t){function e(e,n){var r=t.call(this,e.value===n)||this;return r.parent=e,r.truthyValue=n,r}return r(e,t),e.prototype.set=function(t){this.parent.set(t?this.truthyValue:null)},e}(l),y=function(t){function e(e,n){var r=t.call(this,null!=e.value)||this;return r.parent=e,r.defaultValue=n,r}return r(e,t),e.prototype.set=function(t){this.parent.set(t?this.defaultValue:null)},e}(l),d=function(t){function e(e,n){var r=t.call(this,e.value.indexOf(n)>=0)||this;return r.parent=e,r.element=n,r}return r(e,t),e.prototype.set=function(t){var e=this,n=Boolean(t);if(this.value!==n){var r=this.parent.value,o=t?r.concat(this.element):r.filter(function(t){return t!==e.element});this.parent.set(o)}},e}(l),k="Invalid value",g=function(t){function e(e,n){var r=t.call(this,e.value[n])||this;return r.parent=e,r.key=n,r}return r(e,t),e.prototype.remove=function(){this.parent.removeAt(this.key)},e.prototype.set=function(t){var e=this;this.value!==t&&this.parent.update(function(n){return n[e.key]=t,n})},e}(l);function m(t,e){var n={};for(var r in t)if(t.hasOwnProperty(r)){var o=t[r][e];void 0!==o&&(n[O(r)]=o)}return n}function O(t){return"$"===t[0]?t.slice(1):t}var b=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.links=null,e}return r(e,t),e.prototype.linkAt=function(t){return this.$at(t)},e.prototype.$at=function(t){var e=this.state[t],n=this.links||(this.links={}),r=n[t];return r&&r.value===e?r:n[t]=new w(this,t,e)},e.prototype.linkAll=function(){return this.state$.apply(this,arguments)},e.prototype.state$=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var n=this.state,r=this.links||(this.links={}),o=0,u=t.length?t:Object.keys(n);o<u.length;o++){var i=u[o],a=n[i],s=r[i];s&&s.value===a||(r[i]=new w(this,i,a))}return r},e}(e.Component),w=function(t){function e(e,n,r){var o=t.call(this,r)||this;return o.component=e,o.key=n,o}return r(e,t),e.prototype.set=function(t){var e={};e[this.key]=t,this.component.setState(e)},e}(l),S=function(t){function e(e,n){var r=t.call(this,e)||this;return r.set=n,r}return r(e,t),e.prototype.set=function(t){},e.prototype.update=function(t,e){this.set(function(n){var r=a(n).clone(n),o=t(r,e);return void 0===o?n:o})},e}(l);function L(t){var n=e.useState(t),r=n[0],o=n[1];return new S(r,o)}function j(t){var n=e.useState(t),r=n[0],o=n[1],u=P();return new S(r,function(t){return u.current&&o(t)})}function P(){var t=e.useRef(!0);return e.useEffect(function(){return function(){return t.current=!1}},[]),t}function V(t){var n=t instanceof l?t.value:t,r=L(n);return e.useEffect(function(){return r.set(n)},[n]),r}function _(t){var n=t instanceof l?t.value:t,r=j(n);return e.useEffect(function(){return r.set(n)},[n]),r}function A(t){return t&&void 0!==t._changeToken?t._changeToken:t}t.default=l,t.Link=l,t.LinkedComponent=b,t.StateLink=w,t.ValueLink=l,t.CustomValueLink=p,t.ClonedValueLink=h,t.EqualsValueLink=v,t.EnabledValueLink=y,t.ContainsRef=d,t.PropValueLink=g,t.helpers=a,t.objectHelpers=c,t.arrayHelpers=f,t.UseStateLink=S,t.useLink=L,t.useState$=L,t.useSafeStateRef=j,t.useBoundStateRef=V,t.useSafeBoundStateRef=_,t.useSafeLink=j,t.useIsMountedRef=P,t.useBoundLink=V,t.useSafeBoundLink=_,t.useLocalStorage=function(t,n){var r=e.useRef();r.current=n,e.useEffect(function(){var e=JSON.parse(localStorage.getItem(t)||"{}");return l.setValues(r.current,e),function(){var e=l.getValues(r.current);localStorage.setItem(t,JSON.stringify(e))}},[])},t.useIO=function(t,n){void 0===n&&(n=[]);var r=j(null);e.useEffect(function(){r.set(function(t){var e=t||[0,null];return[e[0]+1,e[1]]}),t().catch(function(t){return r.set(function(e){var n=e[0];return e[1],[n-1,t]})}).then(function(){return r.set(function(t){var e=t[0];return t[1],[e-1,null]})})},n);var o=r.value;return null!==o&&!o[0]&&(o[1]||!0)},t.whenChanged=function(t,e,n,r){var o=arguments.length;switch(o){case 1:return[A(t)];case 2:return[A(t),A(e)];case 3:return[A(t),A(e),A(n)];default:for(var u=[A(t),A(e),A(n),A(r)],i=4;i<o;i++)u.push(A(arguments[i]));return u}},Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=index.js.map
