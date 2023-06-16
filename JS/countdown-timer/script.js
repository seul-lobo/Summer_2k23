const daysEL=document.getElementById('days');
const hoursEl=document.getElementById('hours');
const minsEl=document.getElementById('mins');
const secondsEl=document.getElementById('seconds');


const newYear="1 Jan 2024";



function countDown(){
    const newYearDate=new Date(newYear);
    const currDate=new Date();

    const totalSeconds=(newYearDate-currDate)/1000; //(new-curr)-> milliseconds so divide by 1000 to sec
    const days=Math.floor(totalSeconds/3600/24);
    const hours=Math.floor(totalSeconds/3600)%24;
    const mins=Math.floor(totalSeconds/60)%60;
    const seconds=Math.floor(totalSeconds)%60;
    
    daysEL.innerHTML=days;
    hoursEl.innerHTML=formatTime(hours);
    minsEl.innerHTML=formatTime(mins);
    secondsEl.innerHTML=formatTime(seconds);

}

function formatTime(time){
    return time<10 ? `0${time}` : time;   
}

countDown();
setInterval(countDown,1000);