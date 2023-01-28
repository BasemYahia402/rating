let hide = document.querySelector(".one_page")
let page = document.querySelector(".two_page");
let btn = document.querySelector("button");
let rate = document.querySelectorAll("ul li");
let uprate = document.querySelector(".rating")
let num = 0
rate.forEach(li => {
    li.addEventListener("click", function (e) {
        uprate.innerHTML = `You selected ${e.currentTarget.innerHTML} out of 5`;
    })
});
btn.onclick = function () {
    hide.style = "display:none";
    page.style = "display:block";
}
