const toggle = document.querySelector(".toggleBtn");
const text = document.querySelector(".toggleText");

toggle.addEventListener("click", ()=>{
    text.classList.toggle("visible")
});