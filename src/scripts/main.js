/* LAtivar Ligth e Dark Mode */

const button_switch = document.getElementById("sm")
const i = document.getElementById("smi")

let dark = false

button_switch.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
    dark = !dark

    if(dark) {
        i.classList.remove("ph-sun")
        i.classList.add("ph-moon-stars")
    } else {
        i.classList.remove("ph-moon-stars")
        i.classList.add("ph-sun")
    }

})

/* Abrir e fechar o menu */

const menu = document.getElementById("menu")
const exit = document.getElementById("exit")
const modal = document.getElementById("modal")

menu.addEventListener('click', () => {
    modal.classList.toggle("hidden")
})

exit.addEventListener('click', () => {
    modal.classList.toggle("hidden")
})

function fechar(){
    modal.classList.toggle("hidden")
}

/* VALIDAÇÃO DE FORMULÁRIO DE CONTATO */

const form = document.querySelector("form")
const campos = document.querySelectorAll(".required")
const text = document.querySelectorAll(".p-required")
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

let Errors = 0

function setError(index) {
    campos[index].style.border = '1px solid red'
    text[index].style.display = 'block'
}

function removeError(index) {
    campos[index].style.border = ''
    text[index].style.display = 'none'
}


function nameValidate(){
    if(campos[0].value.length < 3){
        setError(0)
        Errors++
    } else {
        removeError(0)
        Errors--
    }
}

function emailValidate(){
    if(!emailRegex.test(campos[1].value)){
        setError(1)
        Errors++
    } else {
        removeError(1)
        Errors--
    }
}

function textareaValidate(){
    if(campos[2].value.length < 20){
        setError(2)
        Errors++

    } else {
        removeError(2)
        Errors--
    }
}