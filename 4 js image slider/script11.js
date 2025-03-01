let lbtn=document.getElementById('limg');
let imgset=document.querySelector('.imagesset');
let rbtn=document.getElementById('rimg');
let pluse=400;
let curentindex=1;
document.getElementsByTagName('h1')[0].innerText='11';

let buttons=document.querySelectorAll('.cbtn');
console.log(buttons);

function bgt(){
buttons.forEach(function(butn){
    butn.style.background='transparent';
});
}

rbtn.addEventListener('click',function(){
     if(pluse == 400){
        bgt();
        imgset.style.transform='translateX(-400px)';
        buttons[1].style.background='white'
        pluse=800;
    }else if(pluse == 800){
        bgt();
        imgset.style.transform='translateX(-800px)';
        buttons[2].style.background='white'
        pluse=1200;
    }else if(pluse == 1200){
        bgt();
        imgset.style.transform='translateX(-1200px)';
        buttons[3].style.background='white'
        pluse=1600;
    }else if(pluse == 1600){
        bgt();
        imgset.style.transform='translateX(0px)';
        buttons[0].style.background='white';
        pluse=400;
    }
});

lbtn.addEventListener('click',function(){
    if(pluse == 1600){
       bgt();
       imgset.style.transform='translateX(-800px)';
       buttons[2].style.background='white'
       pluse=1200;
   }else if(pluse == 1200){
       bgt();
       imgset.style.transform='translateX(-400px)';
       buttons[1].style.background='white'
       pluse=800;
   }else if(pluse == 800){
       bgt();
       imgset.style.transform='translateX(0px)';
       buttons[0].style.background='white'
       pluse=400;
   }else if(pluse == 400){
       bgt();
       imgset.style.transform='translateX(-1200px)';
       buttons[3].style.background='white';
       pluse=1600;
   }
});

    buttons[0].style.background='white';

    buttons.forEach(function(butn){
        butn.addEventListener('click',function(e){
            console.log(e);
            if(e.target.id == '1btn'){
                imgset.style.transform='translateX(0px)';
                pluse=0;
                    if(pluse == 0){
                        buttons[0].style.background='white';
                        buttons[1].style.background='transparent';
                        buttons[2].style.background='transparent';
                        buttons[3].style.background='transparent'; 
                        pluse=400;       
                    }
            }else if(e.target.id == '2btn'){
                imgset.style.transform='translateX(-400px)';
                pluse=400;
                    if(pluse == 400){
                        buttons[0].style.background='transparent';
                        buttons[1].style.background='white';
                        buttons[2].style.background='transparent';
                        buttons[3].style.background='transparent';
                        pluse=800;    
                    }
            }else if(e.target.id == '3btn'){
                imgset.style.transform='translateX(-800px)';
                pluse=800;
                e.target.style.background='white';
                    if(pluse == 800){
                        buttons[0].style.background='transparent';
                        buttons[1].style.background='transparent';
                        buttons[2].style.background='white';
                        buttons[3].style.background='transparent';
                        pluse=1200;        
                    }
            }else if(e.target.id == '4btn'){
                imgset.style.transform='translateX(-1200px)';
                pluse=1200;
                e.target.style.background='white';
                    if(pluse == 1200){
                        buttons[0].style.background='transparent';
                        buttons[1].style.background='transparent';
                        buttons[2].style.background='transparent';
                        buttons[3].style.background='white';
                        pluse=1600;        
                    }
            }
        });
    });    