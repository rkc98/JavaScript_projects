

const newYear="1 Jan 2022";


function counter(){
    const currentDate = new Date();
    const newYearDate= new Date(newYear);
    const totalSeconds =(newYearDate-currentDate)/1000;
    const days=Math.floor(totalSeconds/3600/24);
    const hours =Math.floor(totalSeconds/3600)%24;
   const minutes=Math.floor(totalSeconds/60)%60;
  const seconds =Math.floor(totalSeconds)%60;
 
    document.getElementById('seconds').innerHTML=seconds;
    document.getElementById('minutes').innerHTML=minutes;
    document.getElementById('hours').innerHTML=hours;
    document.getElementById('days').innerHTML=days;

}
counter();
setInterval(counter,1000);