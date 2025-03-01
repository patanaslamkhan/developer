let quizzeques=[{
    oquestion:'give correct answear 2+2',         
     oanswers:[
        {text:'2',correct:false},
        {text:'4',correct:true},
        {text:22,correct:false},
        {text:44,correct:false},
    ]},

    {oquestion:'give correct answear 5+5',
     oanswers:[
            {text:10,correct:true},
            {text:50,correct:false},
            {text:55,correct:false},
            {text:5,correct:false},
        ]
    },
];

let dquestion=document.querySelector('.question');
let danswers=document.querySelector('.answers');
let nextbutton=document.querySelector('.nextbutton');

let qzeroi=0;
let azeroi=0;
let button
let butn=[]

function startquizze(){
    qzeroi=0;
    azeroi=0;
    nextbutton.innerText='START';
}
//NEXTbutton
nextbutton.addEventListener('click',function(){
    removpreviousbutn();
    nextbutton.style.display='none';
    score();
    let questionc=quizzeques[qzeroi].oquestion;
    let questionno=qzeroi+1;
    dquestion.innerText=questionno+' '+questionc;

    quizzeques[qzeroi].oanswers.forEach(function(vanswers){
        button=document.createElement('button');
        button.innerText=vanswers.text;
        button.dataset.correct=vanswers.correct;
        danswers.appendChild(button);
        butn.push(button);
        console.log(button)
        button.addEventListener('click',clickonoption);
    });
    qzeroi++;
});
//clickonoption
function clickonoption(e){
    if(e.target.dataset.correct == 'true'){
        e.target.style.background='lightgreen';
        azeroi+=1;
    }else{
        e.target.style.background='red';
    }
    butn.forEach(function(butn){
        if(butn.dataset.correct == 'true'){
            butn.style.background='lightgreen';
        }
        butn.disabled=true;
    })
    nextbutton.style.display='block';
    nextbutton.innerText='NEXT';
}
//removing previouse buttons aftear clicking  NEXTbutton
let removpreviousbutn=()=>{
     /*   let children = Array.from(danswers.children); // children ని Array గా మార్చండి
        for (let i = 0; i < children.length; i++) {
            danswers.removeChild(children[i]); // ఒక్కో child element ను తొలగించండి
        }*/    

    for (; danswers.firstChild;) {  // only condition in the loop
        danswers.removeChild(danswers.firstChild);
    }
}
//last score result
let score = () => {
    if (qzeroi === quizzeques.length){
        console.log(qzeroi);
        dquestion.innerText = `correct answear ${azeroi} of ${quizzeques.length}`;
        nextbutton.style.display='block';
        nextbutton.innerHTML='Restart';
        nextbutton.addEventListener('click',function(){
            location.reload();
        });
    }
}
console.log(qzeroi);
