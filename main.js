const  countdown = ()=> {
    const countdate = new Date("Mar 12,2022 08:30:00").getTime();
    const now = new Date().getTime();
    const gap = countdate-now;
    const second = 1000;
    const min = second*60;
    const hour = min*60;
    const day = hour*24;
    const textday = Math.floor(gap /  day);
    const texthour = Math.floor((gap %  day)/hour);
    const textmin = Math.floor((gap %  hour)/min);
    const textsec = Math.floor((gap %  min)/second);
    document.querySelector('.day').innerText = textday;
    document.querySelector('.hour').innerText = texthour;
    document.querySelector('.min').innerText = textmin;
    document.querySelector('.sec').innerText = textsec;
};
const  countdown2 = ()=> {
    const countdate = new Date("Mar 19,2022 08:30:00").getTime();
    const now = new Date().getTime();
    const gap = countdate-now;
    const second = 1000;
    const min = second*60;
    const hour = min*60;
    const day = hour*24;
    const textday = Math.floor(gap /  day);
    const texthour = Math.floor((gap %  day)/hour);
    const textmin = Math.floor((gap %  hour)/min);
    const textsec = Math.floor((gap %  min)/second);
    document.querySelector('.day1').innerText = textday;
    document.querySelector('.hour1').innerText = texthour;
    document.querySelector('.min1').innerText = textmin;
    document.querySelector('.sec1').innerText = textsec;
};
const  countdown3 = ()=> {
    const countdate = new Date("Mar 25,2022 08:30:00").getTime();
    const now = new Date().getTime();
    const gap = countdate-now;
    const second = 1000;
    const min = second*60;
    const hour = min*60;
    const day = hour*24;
    const textday = Math.floor(gap /  day);
    const texthour = Math.floor((gap %  day)/hour);
    const textmin = Math.floor((gap %  hour)/min);
    const textsec = Math.floor((gap %  min)/second);
    document.querySelector('.day2').innerText = textday;
    document.querySelector('.hour2').innerText = texthour;
    document.querySelector('.min2').innerText = textmin;
    document.querySelector('.sec2').innerText = textsec;
};
setInterval(countdown,1000);
setInterval(countdown2,1000);
setInterval(countdown3,1000);
