const navMain=document.querySelector(".main-nav"),navToggle=document.querySelector(".main-nav__toggle"),navList=document.querySelector(".main-nav__list");navToggle.addEventListener("click",(function(){navMain.classList.contains("main-nav--closed")?(navMain.classList.remove("main-nav--closed"),navMain.classList.add("main-nav--opened")):(navMain.classList.add("main-nav--closed"),navMain.classList.remove("main-nav--opened"))})),navToggle.addEventListener("click",(function(){navList.classList.toggle("main-nav__list--toggle")}));