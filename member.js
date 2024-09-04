const email = document.getElementById('email')
const password = document.getElementById('password')
const button = document.getElementById('btn')
const ps = document.getElementById('ps')
const pe = document.getElementById('pe')

button.addEventListener('click', () => {
    let showErrorEmail = false;
    let showErrorPassword = false;

    if(email.value !== 'exemplo@ex.com') {  
        showErrorEmail = true;
    }

    if(password.value !== '123') {  
        showErrorPassword = true; 
    }

    if(showErrorEmail) {
        pe.style.display = "block";
    } else {
        pe.style.display = "none"; 
    }

    if(showErrorPassword) {
        ps.style.display = "block";  
    } else {
        ps.style.display = "none"; 
    }
})

