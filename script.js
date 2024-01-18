const newsCard = document.getElementById("newsCard");
const LatestNews = document.getElementById("LatestNews");
const theEndOfPage = document.querySelector(".theEndOfPage");
const Footer = document.querySelector(".footer");

LatestNews.addEventListener("click", () => {
    newsCard.style.display = "flex";
    theEndOfPage.style.display = "block";
    Footer.style.position = "relative";
});


const navbarSearch = document.querySelector(".navbarSearch");
const closeSearch = document.querySelector(".closeSearch");
const logo = document.querySelector(".logo");
const py4 = document.querySelector(".py-4");
const pargasiranLogo = document.querySelector(".pargasiranLogo");
const mainPicture = document.querySelector(".mainPicture");
const footer = document.querySelector(".footer");
const behindSearchBox = document.querySelector(".behindSearchBox");

navbarSearch.addEventListener("click" , () => {
closeSearch.style.display = "block";
logo.style.display = "none";
py4.style.display = "block";
pargasiranLogo.style.display = "none";
mainPicture.style.filter = "brightness(10%)";
mainPicture.style.opacity = "0.9";
footer.style.filter = "brightness(10%)";
behindSearchBox.style.display = "block";
});

closeSearch.addEventListener("click" , () => {
closeSearch.style.display = "none";
logo.style.display = "block";
py4.style.display = "none";
pargasiranLogo.style.display = "block";
footer.style.filter = "brightness(100%)";
mainPicture.style.filter = "brightness(100%)";
mainPicture.style.opacity = "1";
behindSearchBox.style.display = "none";

});


// const borderLine = document.querySelector(".borderLine");


const firstCol = document.querySelector(".first");
const mouseEnterHover1 = document.querySelector(".mouseEnterHover1");
const borderLine1 = document.querySelector(".borderLine");
firstCol.addEventListener("mouseenter", () => {
    mouseEnterHover1.style.display = "block";
    borderLine1.style.display = "block";
});
firstCol.addEventListener("mouseleave", () => {
    mouseEnterHover1.style.display = "none";
});

$(document).ready(function() {
    $(".first").mouseenter(function() {
        $(".borderLine1").animate({
            width: "50%",
            // heigh: "20px"
        }, 500);
        })
})
$(document).ready(function() {
    $(".first").mouseleave(function() {
        $(".borderLine1").animate({
            width: "1px",
            // heigh: "20px"
        }, 500);
        })
})





const secondCol = document.querySelector(".second");
const mouseEnterHover2 = document.querySelector(".mouseEnterHover2");
secondCol.addEventListener("mouseenter", () => {
    mouseEnterHover2.style.display = "block";
});
secondCol.addEventListener("mouseleave", () => {
    mouseEnterHover2.style.display = "none";
});

$(document).ready(function() {
    $(".second").mouseenter(function() {
        $(".borderLine2").animate({
            width: "50%",
            // heigh: "20px"
        }, 500);
        })
})
$(document).ready(function() {
    $(".second").mouseleave(function() {
        $(".borderLine2").animate({
            width: "1px",
            // heigh: "20px"
        }, 500);
        })
})




const thirdCol = document.querySelector(".third");
const mouseEnterHover3 = document.querySelector(".mouseEnterHover3");
thirdCol.addEventListener("mouseenter", () => {
    mouseEnterHover3.style.display = "block";
});
thirdCol.addEventListener("mouseleave", () => {
    mouseEnterHover3.style.display = "none";
});

$(document).ready(function() {
    $(".third").mouseenter(function() {
        $(".borderLine3").animate({
            width: "50%",
            // heigh: "20px"
        }, 500);
        })
})
$(document).ready(function() {
    $(".third").mouseleave(function() {
        $(".borderLine3").animate({
            width: "1px",
            // heigh: "20px"
        }, 500);
        })
})





const forthCol = document.querySelector(".forth");
const mouseEnterHover4 = document.querySelector(".mouseEnterHover4");
forthCol.addEventListener("mouseenter", () => {
    mouseEnterHover4.style.display = "block";
});
forthCol.addEventListener("mouseleave", () => {
    mouseEnterHover4.style.display = "none";
});

$(document).ready(function() {
    $(".forth").mouseenter(function() {
        $(".borderLine4").animate({
            width: "50%",
            // heigh: "20px"
        }, 500);
        })
})
$(document).ready(function() {
    $(".forth").mouseleave(function() {
        $(".borderLine4").animate({
            width: "1px",
            // heigh: "20px"
        }, 500);
        })
})





