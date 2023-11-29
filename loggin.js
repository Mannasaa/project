var signup=document.getElementById('signup_page');
var login=document.getElementById('login_page');
var btn=document.getElementById('btn')
var btn1=document.getElementById('btn1');

var btnm=document.getElementById('btnm');
btn.style.display='none'
btn1.style.display='none'
function hide(){
    if(btn.style.display==='none'){
        btn.style.display='block'
        btn1.style.display='block'
        btnm.style.display='none'
        
    }
}

signup.style.display='none';
function display1(){
    if(signup.style.display==='none')
    {
        signup.style.display='block'
        login.style.display='none'
        btn1.style.display='none'
    }
   
}
login.style.display='none';
function display(){
    if(login.style.display==='none')
    {
        login.style.display='block'
        signup.style.display='none'
        btn.style.display='none'
        btnm.style.display='none'
    }
   
}