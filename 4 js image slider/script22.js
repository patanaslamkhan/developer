let lbtn=document.querySelector('#limg');
let rbtn=document.querySelector('#rimg');
let imgslider=document.querySelector('.imagesset');
let images=document.querySelectorAll('.images');
let img=images.length;

document.getElementsByTagName('h1')[0].innerText='22';

let slidernumber=1;
let R=1;
let L=0
let buttons=document.getElementById('buttons');

for(i=0; i < img; i++){
    let div=document.createElement('div');
    div.className='cbtn'
    buttons.appendChild(div);
}

let cbutns=document.querySelectorAll('.cbtn');
    cbutns[0].style.background='white';

    function resetbg(){
        cbutns.forEach(function(butns){
            butns.style.background='transparent';
            //butns.addEventListener('mouseover',stopauto);
            //butns.addEventListener('mouseout',autorun);    
        });
    }

    let autorun=function(){
        si=setInterval(auto,1500);
    }
    autorun();
    
    function stopauto(){
        clearInterval(si);
    }

cbutns.forEach(function(butns,i){
    butns.addEventListener('mouseover',stopauto);
    butns.addEventListener('mouseout',autorun);
    butns.addEventListener('click',function(){
        resetbg();
        imgslider.style.transform=`translateX(-${i*400}px)`;
        slidernumber= i + 1 ;
        R=i+1;
        L=i;
        butns.style.background='white';
    });/*forEach lo cbutns ni butns lo supprate
         varibule ga tiskonni a butns ki style apply chesthe 
         a button midha click chesthe a button ki style vachi work avuthundhi 
         inkka i value kudha udate avuthundhi 
         a i lo index update ainna i ni e vidhamga         
         imgslider.style.transform=`translateX(-${i*400}px)`; usse cheskovachu */
});

function changecbutns(){
    resetbg();
    //cbutns[slidernumber-1].style.background='white';
}

//next and first slide functions
let nextslide=function(){
    imgslider.style.transform=`translateX(-${slidernumber*400}px)`;
    slidernumber++;
}
function firstslide(){
    imgslider.style.transform=`translateX(0px)`; 
    slidernumber=1;
}
//preivous and last slide function
let previousslide= ()=>{
    imgslider.style.transform=`translateX(-${(slidernumber-2)*400}px)`;
    slidernumber--;
}
let lastslide= ()=>{
    imgslider.style.transform=`translateX(-${(img-1)*400}px)`;
    slidernumber=img;
}

rbtn.addEventListener('click',function(){
    slidernumber < img ? nextslide() : firstslide();
    changecbutns();
    if(R < 4){
    cbutns[R].style.background='white';
    console.log(R);
    R++;
    }
    else{
        R=0;
        cbutns[R].style.background='white'; 
        R++;  
    }
    /*e cundition prakkaram okka varibulle lo 
    0 to 3 varkku run aie malli 0 nuchi 3 ki runn aye tathu cheyochu */   

});

lbtn.addEventListener('click',()=>{
    slidernumber == 1 ? lastslide() : previousslide();
    changecbutns();
    if(L == 0){
        L=3
        cbutns[L].style.background='white';
        console.log(a);
        }
        else{
            L--;  
            cbutns[L].style.background='white'; 
        } 
});

function auto(){
    slidernumber < img ? nextslide() : firstslide();

    resetbg();

    if(R < 4){
        cbutns[R].style.background='white';
        console.log(R);
        R++;
        }
        else{
            R=0;
            cbutns[R].style.background='white'; 
            R++;  
        }    
}


rbtn.addEventListener('mouseover',stopauto);
rbtn.addEventListener('mouseout',autorun);
lbtn.addEventListener('mouseover',stopauto);
lbtn.addEventListener('mouseout',autorun);
imgslider.addEventListener('mouseover',stopauto);
imgslider.addEventListener('mouseout',autorun);



