// Открытие и скрытие полоски
const close_aside = document.querySelector(".close_aside")
close_aside.addEventListener("click", ()=> {
    document.querySelector("body").classList.toggle("aside_pas")
    console.log(1);
})
