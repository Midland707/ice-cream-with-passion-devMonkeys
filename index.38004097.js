(()=>{const e=document.querySelector(".js-locations"),o=document.querySelector(".js-locations-open"),t=document.querySelector(".js-locations-close"),c=()=>{const t="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!t),e.classList.toggle("is-open");bodyScrollLock[t?"enableBodyScroll":"disableBodyScroll"](document.body)};o.addEventListener("click",c),t.addEventListener("click",c)})();
//# sourceMappingURL=index.38004097.js.map
