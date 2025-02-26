const modal2 = document.getElementById("modal2")

const loremIpsum = document.getElementById("lorem-ipsum2")
    .then(response => response.text())
    .then(result => loremIpsum.innerHTML = result)

function modalOn() {
    modal2.style.display = "flex"
}
function isModalOn() {
    return modal2.style.display === "flex"
}
function modalOff() {
    modal2.style.display = "none"
}

// 버튼
// const btnModal2 = document.getElementById("btn-modal2")
// btnModal2.addEventListener("click", e => {
//     modalOn()
// })

const btnModal2 = document.getElementsByClassName("btn-modal2")
btnModal2.addEventListener("click", e => {
    modalOn()
})
// const btnModal2 = document.getElementById("btn-modal2")
// btnModal2.addEventListener("click", e => {
//     modalOn()
// })
const closeBtn2 = modal2.querySelector(".close-area2")
closeBtn2.addEventListener("click", e => {
    modalOff()
})
modal2.addEventListener("click", e => {
    const evTarget2 = e.target
    if(evTarget2.classList.contains("modal-overlay2")) {
        modalOff()
    }
})
window.addEventListener("keyup", e => {
    if(isModalOn() && e.key === "Escape") {
        modalOff()
    }
})

