let tittle=document.querySelector('.tittle');
let text=document.querySelector('.text');
let underline=document.querySelector('.underline');
let signupbtn=document.querySelector('.signupbtn');
let signinbtn=document.querySelector('.signinbtn');

signinbtn.addEventListener('click',function(){
    tittle.innerHTML='Sign in'
    underline.style.transform='translateX(34px)';
    text.style.maxHeight='0px';
    signupbtn.classList.add('disable')
    signinbtn.classList.remove('disable')
});

signupbtn.addEventListener('click',function(){
    tittle.innerHTML='Sign Up'
    underline.style.transform='translateX(0px)';
    text.style.maxHeight='60px';
    signupbtn.classList.remove('disable')
    signinbtn.classList.add('disable')
});

