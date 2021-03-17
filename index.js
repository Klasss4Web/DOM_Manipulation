const header = document.getElementById('main-header');
header.style.backgroundColor = 'blue'

//Parent Element

const listItems = document.getElementById("items");

//Logging listItems to the console to see what it outputs
console.log(listItems.parentElement)

listItems.parentElement.style.backgroundColor = '#f2f2f2';
listItems.style.fontSize = '18px';

//Using Query Selector to access html element

const btn = document.querySelector('.btn');

//Change the color of the button with class name of btn
btn.style.backgroundColor = 'blue';