const header = document.getElementById('main-header');
header.style.backgroundColor = 'blue';

//Parent Element

const listItems = document.getElementById("items");

//Logging listItems to the console to see what it outputs
console.log(listItems.parentElement)

listItems.parentElement.style.backgroundColor = '#f2f2f2';
listItems.style.fontSize = '18px';

//Using Query Selector to access html element

let btn = document.querySelector('.btn');

//Change the color of the button with class name of btn
btn.style.backgroundColor = 'blue';

btn.addEventListener('click', function(e) {
  let input = document.querySelector('.form-control').value;
  let message = document.querySelector('.messageAlert');

  if(input !== "") {
    let listGroup = document.querySelector('.list-group');
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(input));
    listGroup.appendChild(li);
   
  } else {
    message.style.border = '3px solid red';
    message.style.width = '300px';
    message.style.padding = '10px';
    message.textContent = 'please enter a valid input';
    setTimeout(clearError, 2000)
    
  }
  // console.log(listGroup);
  // listGroup[0].textContent = input.value;
  // console.log('loading...')
  e.preventDefault()
})

let info = 'please enter a valid input'
function clearError(){
  document.querySelector('.messageAlert').remove();
}