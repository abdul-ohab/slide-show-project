
const slideElements = document.querySelectorAll('.element');
let countElements = 1;

setInterval(() =>{
    countElements++;
    const currentElement = document.querySelector(".current");
    currentElement.classList.remove("current");

    if(countElements > slideElements.length){
        slideElements[0].classList.add("current");
        countElements = 1;
    }
    else{       
        currentElement.nextElementSibling.classList.add("current");
    }

},2000);