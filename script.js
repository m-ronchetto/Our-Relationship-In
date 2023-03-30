Array.from(document.getElementsByClassName("card")).forEach((el, index) => el.addEventListener("click", function(){
    el.classList.toggle("flipCard");
}));