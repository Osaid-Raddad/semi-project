/* section 2 animation */
let isAb = false;
let isTxt = false;
let isCount = false;
let isBusinessTitle = false;
let isFirstCard = false;
let isSecondCard = false;
let isThirdCard = false;
let isAppearBtn = false;
let isWork = false;
let isImg = false;
window.onscroll = function () {

   // const nav = document.querySelector(".header");
   // const about = document.querySelector(".about");
    const hi = document.querySelector(".about .ab");
    const tt = document.querySelector(".about .about-txt");
    const ctr = document.querySelector(".about .count-s");
    const businessTitle = document.querySelector(".section-3 .business");
    const fistCard = document.querySelector(".section-3 .first-icon-section");
    const secondCard = document.querySelector(".section-3 .second-icon-section");
    const thirdCard = document.querySelector(".section-3 .third-icon-section");
    const appearBtn = document.querySelector(".go-top");
    const work = document.querySelector(".section-4 .apear");
    const Img = document.querySelector(".section-4 .work-container");

    //console.log(hi);
    //console.log(about.offsetTop);
    console.log(window.scrollY);
    
    

    if (window.scrollY > 475 && !isAb) {
        isAb = true;
        hi.classList.remove("d-none");
        hi.classList.add("d-appear");
    }
    
    if (window.scrollY > 600 && !isTxt) {
        isTxt = true;
        tt.classList.remove("d-none");
        tt.classList.add("d-appear");
    }
   
    if (window.scrollY > 750 && !isCount) {
        isCount = true;
        ctr.classList.remove("d-none");
        ctr.classList.add("d-appear");
        count();
    }

    if(window.scrollY > 1162){
        isBusinessTitle = true;
        businessTitle.classList.remove("d-none");
        businessTitle.classList.add("d-appear");
    }
    if(window.scrollY > 1439){
        isFirstCard = true;
        fistCard.classList.remove("d-none");
        fistCard.classList.add("d-appear");
    }
    if(window.scrollY > 1728){
        isSecondtCard = true;
        secondCard.classList.remove("d-none");
        secondCard.classList.add("d-appear");
    }
    if(window.scrollY > 1953){
        isThirdCard = true;
        thirdCard.classList.remove("d-none");
        thirdCard.classList.add("d-appear");
    }
    if(window.scrollY < 225){
        isAppearBtn = false;
        appearBtn.classList.remove("d-appear");
        appearBtn.classList.add("d-none-btn");
    }
    if(window.scrollY > 225){
        isAppearBtn = true;
        appearBtn.classList.remove("d-none");
        appearBtn.classList.add("d-appear");
    }
    if (window.scrollY > 2510 && !isWork) {
        isWork= true;
        work.classList.remove("d-none");
        work.classList.add("d-appear");
    }
    if (window.scrollY > 2723 && !isImg) {
        isImg = true;
        Img.classList.remove("d-none");
        Img.classList.add("d-appear");
    }
}


function count() {
    const numbers = document.querySelectorAll(".number");

    numbers.forEach(number => {
        const max = parseInt(number.getAttribute("data-max"), 10);
        let current = 0;
        const increment = Math.ceil(max / 100); 
        const duration = 2000; 
        const intervalTime = duration / (max / increment);

        const interval = setInterval(() => {
            current += increment;
            if (current >= max) {
                current = max; 
                clearInterval(interval); 
            }
            number.textContent = current;
        }, intervalTime);
    });
}

$ (document).ready (function () {
	$ (".modal a").not (".dropdown-toggle").on ("click", function () {
		$ (".modal").modal ("hide");
	});
});
