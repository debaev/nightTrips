"use strict";var menuBtnToggle=document.querySelector(".header-nav-menu__btn_close");// MENU BTN START
menuBtnToggle.addEventListener("click",function(){this.classList.toggle("open"),document.querySelector(".header-nav").classList.toggle("active")});for(var tabLinks=document.querySelectorAll(".sections-nav__link"),i=0;i<tabLinks.length;i++)tabLinks[i].onclick=function(a){a.preventDefault();for(var b=0;b<tabLinks.length;b++)tabLinks[b].classList.remove("active");this.classList.add("active")};function Tabs(){var a=function(){for(var a=document.querySelectorAll("[data-tab]"),b=0;b<a.length;b++)a[b].addEventListener("click",c,!1)},b=function(){for(var a=document.querySelectorAll("[data-tab]"),b=0;b<a.length;b++){a[b].classList.remove("active");var c=a[b].getAttribute("data-tab");document.getElementById(c).classList.remove("active")}},c=function(a){b(),a.target.classList.add("active");var c=a.currentTarget.getAttribute("data-tab");document.getElementById(c).classList.add("active")};a()}