const pageOne = document.getElementById("page1");
const pageTwo = document.getElementById("page2");
const pageThree = document.getElementById("page3");
const pageFour = document.getElementById("page4");
const pageFive = document.getElementById("page5");
const pageSix = document.getElementById("page6");
const pageSeven = document.getElementById("page7");
const pageEight = document.getElementById("page8");
const pageNine = document.getElementById("page9");
const pageTen = document.getElementById("page");
const pageEleven = document.getElementById("footer");
const home = document.getElementById("home");
const about = document.getElementById("about");
const services = document.getElementById("services");
const ourAgency = document.getElementById("ourAgency");
const contact = document.getElementById("contact");

const btnElement = document.getElementById("homeBtn");
const afterclickElement = document.getElementById("afterBtn");
const backBtn = document.getElementById("backBtn")

btnElement.addEventListener("click", function () {
    pageOne.classList.add("js-use");
    pageTwo.classList.add("js-use");
    pageThree.classList.add("js-use");
    pageFour.classList.add("js-use");
    pageFive.classList.add("js-use");
    pageSix.classList.add("js-use");
    pageSeven.classList.add("js-use");
    pageEight.classList.add("js-use");
    pageNine.classList.add("js-use");
    pageTen.classList.add("js-use");
    afterclickElement.classList.toggle("d-none")
});
backBtn.addEventListener("click", function () {
    pageTwo.classList.toggle("js-use");
    pageThree.classList.toggle("js-use");
    pageFour.classList.toggle("js-use");
    pageFive.classList.toggle("js-use");
    pageSix.classList.toggle("js-use");
    pageOne.classList.toggle("js-use");
    pageSeven.classList.toggle("js-use");
    pageEight.classList.toggle("js-use");
    pageNine.classList.toggle("js-use");
    pageTen.classList.toggle("js-use");
    afterclickElement.classList.toggle("d-none")
})



