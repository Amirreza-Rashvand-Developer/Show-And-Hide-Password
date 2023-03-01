let getIconHide = document.querySelector(".input__hide")
let getInputPassword = document.querySelector(".input__password")
let getInputOverLay = document.querySelector(".input__overlay")

getIconHide.addEventListener("click", function () {
    if (getInputPassword.type == "password") {
        getInputPassword.type = "text"
        getIconHide.classList.add("bx-show")
    } else {
        getInputPassword.type = "password"
        getIconHide.classList.remove("bx-show")
    }

    getInputOverLay.classList.toggle("overlay-content")
})