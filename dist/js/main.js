(function(){
'use strict';const a=document.querySelector(".menu-btn"),b=document.querySelector(".menu"),d=document.querySelector(".menu-nav"),e=document.querySelector(".menu-branding"),f=document.querySelectorAll(".nav-item");let g=!1;a.addEventListener("click",h);
function h(){g?(a.classList.remove("close"),b.classList.remove("show"),d.classList.remove("show"),e.classList.remove("show"),f.forEach(c=>c.classList.remove("show")),g=!1):(a.classList.add("close"),b.classList.add("show"),d.classList.add("show"),e.classList.add("show"),f.forEach(c=>c.classList.add("show")),g=!0)};
}).call(this)
