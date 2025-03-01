let data=document.getElementById('listcreater');//input
let adder=document.getElementById('addbtn');//button
let datalist=document.getElementById('listitems');//<ul>

//add button
adder.addEventListener('click',function (){
    if(data.value === ''){
        alert('Enter your daily activitys')
    }else{
        let list=document.createElement('li');//list tag
        let size=document.createElement('b');
        list.appendChild(size);
        size.innerText=data.value;

        let del=document.createElement('span');//span tag
        del.classList.add('delbtn')//delbtn class
        del.innerText='X';
        list.appendChild(del);

        datalist.appendChild(list);
    }
    data.value="";
    savedata();
});

//line-through
datalist.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        savedata();
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        savedata();
    }
});

//savedata
function savedata(){ 
    localStorage.setItem('data',datalist.innerHTML);
}

//showdata
function showdata(){
    datalist.innerHTML=localStorage.getItem('data');
}
showdata()