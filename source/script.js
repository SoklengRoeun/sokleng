const btnBar = document.querySelector(".btn-bar");
const navList = document.querySelector(".nav-list");
// console.log(navList)
btnBar.addEventListener("click", ()=> {
    navList.classList.toggle("active");
});