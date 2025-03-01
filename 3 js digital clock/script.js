function clock(){
    let hours=document.getElementById('hours');
    let minutes=document.getElementById('minutes');
    let seconds=document.getElementById('seconds');
    let periode=document.getElementById('periode');


    let now = new Date();

    let h=now.getHours();
    let m=now.getMinutes();
    let s=now.getSeconds();

    let ampm 
    h < 12 ? ampm='AM' : ampm='PM';//AM or PM

    h = h > 12 ? h - 12 : h;//24-12

    h = h < 10 ? '0'+h : h;//01h
    m = m < 10 ? '0'+m : m;//01m
    if(s<10){
        s='0'+s;//01s
    }


    hours.innerHTML=h;
    minutes.innerHTML=m;
    seconds.innerHTML=s;
    periode.innerHTML=ampm;


}

setInterval(clock,1000);