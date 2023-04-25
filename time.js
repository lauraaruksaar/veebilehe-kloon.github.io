let d = new Date();
let hours = d.getHours();
let minutes = d.getMinutes();
let day = d.getDay();
let date = d.getDate();



let fontSize = 42;
let days = ["Sunday", "Monday", "Tuesday ", "Wednesday", "Thursday", "Friday", "Saturday"];  



let dayContainer = document.getElementById('day');
let monthContainer = document.getElementById('month');
let dateContainer = document.getElementById('date');
let minutesContainer = document.getElementById('minutes');
let hoursContainer = document.getElementById('hours');



dayContainer.innerHTML = days[day];
monthContainer.innerHTML = months[month];
dateContainer.innerHTML = date;
updateClock();


function updateClock(){
    d = new Date();
    hours = d.getHours();
    minutes = d.getMinutes();

    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(hours < 10){
        hours = "0" + hours;
    }
    
    minutesContainer.innerHTML = ":" +  minutes;
    hoursContainer.innerHTML = hours;

}




