

const blackBtn = document.querySelector(".dark-btn")

blackBtn.addEventListener("click", () =>{
    document.body.classList.toggle("dark")
    document.body.classList.toggle("light")

})