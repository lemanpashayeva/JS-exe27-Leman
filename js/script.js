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
    localStorage.setItem('user' , ls);
});

const searchName = document.getElementById('searchName');
const searchBtn = document.getElementById('searchBtn');
let wronganswer = 0;

searchBtn.addEventListener('click', function(){
    let userName = localStorage.getItem('user');
    let MYobj = JSON.parse(userName);
    if(MYobj.user === searchName.value){
        window.alert('Bu ad daha evvel daxil edilib!');
    } else {
        window.alert('Bu adda qeydiyyat olunmayib!');
        wronganswer ++;
    };
    if (wronganswer === 3) {
        window.alert(`daxil edilen ad ${MYobj.user[0]} herfi ile baslayir`);
    }
});