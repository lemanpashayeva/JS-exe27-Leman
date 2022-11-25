const Name = document.getElementById('name');
const mail = document.getElementById('mail');
const password = document.getElementById('password');
const btn = document.getElementById('submit');

btn.addEventListener('click', function(){
    const obj = {
        user: Name.value,
        mail: mail.value,
        password: password.value
    }
    let ls = JSON.stringify(obj);
    localStorage.setItem('user' , ls)
})
