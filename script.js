"use strict";console.log("Hello writer!"),window.addEventListener("DOMContentLoaded",(function(){var e="light",t=document.getElementById("theme-switcher");t.innerHTML=localStorage.theme===e?"🌝":"🌚",t.addEventListener("click",(function(){var n=localStorage.theme,o=n===e?"dark":e,r=document.querySelector("html").classList,l=o===e?"🌝":"🌚";r.remove(n),r.add(o),localStorage.theme=o,t.innerHTML=l}))}));
//# sourceMappingURL=script.js.map