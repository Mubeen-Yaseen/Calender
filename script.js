const DaTe = document.getElementById("date");
const Day = document.getElementById("day");
const Month = document.getElementById("month");
const Year = document.getElementById("year");

const today= new Date();
console.log(today);

const weekdays=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const yearMonths=["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

DaTe.innerHTML=(today.getDate() < 10? "0":"") + today.getDate();
Day.innerHTML=weekdays[today.getDay()];
Month.innerHTML= yearMonths[today.getMonth()];
Year.innerHTML=today.getFullYear();
