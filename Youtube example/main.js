const toggle = document.querySelector(".toggleBtn");
const text = document.querySelector(".visible");

toggle.addEventListener("click", ()=>{
    text.classList.toggle("visible")
    toggle.classList.toggle("clicked")
});