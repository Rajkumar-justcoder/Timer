let nhour = document.querySelector('.dis-hour'); let nmin = document.querySelector('.dis-min'); let nsec = document.querySelector('.dis-sec');
nhour.innerHTML = 0;  nmin.innerHTML = 0; nsec.innerHTML = 0;
let timer; let timertime; 
let hour=0; let min=0; let sec=0; 
let state=0;

const bstart = document.querySelector('.btn-start');
const bpause = document.querySelector('.btn-pause');
bpause.style.display='none';
timer = () => {
    if (sec === 0) {
        sec += 1;
    } else {
        sec = sec + 1;
    }
    if (sec === 6) {
        min += 1;
        sec = 0;
    }
    if (min === 6) {
        hour += 1;
        min = 0;
    }
    nhour.innerHTML = hour;    nmin.innerHTML = min;    nsec.innerHTML = sec;
    console.log("Start clicked");
}
function start() {
    bstart.style.display='none';
    bpause.style.display='flex';
    timertime = setInterval(timer, 1000);    
}
function pause() {
    bstart.style.display='flex';
    bpause.style.display='none';
    
    clearInterval(timertime);
}
function reset() {
    clearInterval(timertime);    nhour.innerHTML = "0";
    nmin.innerHTML = "0";
    nsec.innerHTML = "0";
    hour = 0;
    min = 0;
    sec = 0;
}

