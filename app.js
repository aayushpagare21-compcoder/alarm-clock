let currenttime = document.getElementById('currenttime');

let date = new Date();

let dateStr = date.toString();

console.log(dateStr);

let dateStr1 = dateStr.substr(0, 3);
let dateStr2 = dateStr.substr(3, 13);
let dateStr3 = dateStr.substr(16, 9);

let currentTime = dateStr.substr(16, 8);
console.log(currentTime);

currenttime.innerHTML = `<strong>${dateStr1} -  ${dateStr2} <br> ${dateStr3} </strong>`;

let btn = document.getElementById('btn');
let hero = document.getElementById('hero');
let smallalert = document.getElementById('smallalert');

let alarmSet = false;
let timeStr;

let audio;

btn.addEventListener('click', () => {

    let input = document.getElementById('input');
    timeStr = input.value;
    let regex = /(^([0-9]{2}):([0-9]{2}):([0-9]{2})$)/;

    if (regex.test(timeStr)) {
        smallalert.style.color = 'green';
        hero.style.display = 'block';
        alarmSet = true;
        console.log('ddllf');

    } else {
        smallalert.style.color = 'red';
        alarmSet = false;
    }

    if (alarmSet) {

        let dateObjStr = "";
        let dateObj;


        while (dateObjStr != timeStr) {

            dateObj = new Date();

            dateObjStr = dateObj.toString();

            dateObjStr = dateObjStr.substr(16, 8);

            console.log(dateObjStr)


            if (dateObjStr === timeStr) {
                console.log('Alarm Playing');
                audio = new Audio('alarm.mp3');
                audio.play();
                break;
            }
        }

        let btnsecond = document.getElementById('btnsecond');

        btnsecond.addEventListener('click', () => {
            console.log('cl');
            audio.pause();
        });
    }
});

