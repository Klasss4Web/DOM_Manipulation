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
  let input = document.querySelector('.form-control');
  let inputValue = input.value;
  let message = document.querySelector('.messageAlert');
  let success = document.querySelector('.success')
  if(inputValue !== "") {
    let listGroup = document.querySelector('.list-group');
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(inputValue));
    listGroup.appendChild(li);
    success.style.display = 'block';
    //success.textContent = 'please enter a valid input';
    // setTimeout(clearMessage, 2000)
   
  } else {
    message.style.border = '3px solid red';
    message.style.width = '300px';
    message.style.padding = '10px';
    message.textContent = 'please enter a valid input';
    
    
    setTimeout(clearMessage, 2000)
    
  }
  // console.log(listGroup);
  // listGroup[0].textContent = input.value;
  // console.log('loading...')
  e.preventDefault()
})


function clearMessage(){
  document.querySelector('.messageAlert').remove();
  document.querySelector('.success').remove();
}