//create variable for form
//use variable to target input

let userInput = 0;
let userSum = 0; //user total
let i= 0; //user entries
let average = 0; //average
let enteredAmt = document.querySelector('.input-container span');
const mainForm = document.querySelector('.form-one');
const addButton = document.querySelector('.addbutton');
const finishedButton = document.querySelector('.finishedbutton');

// console.log('variable userInput =' + userInput);
// console.log('variable outside userSum=' +userSum);
// console.log('variable outside i /entries=' +i);
// console.log('variable outside average'+average);

const formOne = document.querySelector('.form-one');
addButton.addEventListener('click', (event) => {
    event.preventDefault();
// formOne.addEventListener('submit', (event) => {
  userInput = Number(document.querySelector('#numbersHere').value);
  event.preventDefault();

//pulling global 'userSum' and adding to userInput to create new
//global user sum

  if (isNaN(userInput)) {
    alert("Try again, kiddo.")
  } else {
    userSum = userInput + userSum;
    i++;
    average = userSum / i;
  }

  const input = document.querySelector('.output-container .user-input p');
  input.innerHTML = `Current input is ${userInput}!!!!`;
  //
  // const sum = document.querySelector('.output-container .user-sum p');
  // sum.innerHTML = `Current sum is ${userSum}!!!!!!`;

  const entries = document.querySelector('.output-container .user-entries p');
  entries.innerHTML = `Current entries ${i}!!!!!`;

  // const aver = document.querySelector('.output-container .user-average p');
  // aver.innerHTML = `Current average is ${average}!!!!`;

  mainForm.reset();
});

//separate listen for finished click & innerHTML
finishedButton.addEventListener('click', (event) => {

  let input = document.querySelector('.finaloutput .user-input p');
  input.innerHTML = `Last entry was ${userInput}.`;

  let sum = document.querySelector('.finaloutput .user-sum p');
  sum.innerHTML = `Overall sum is ${userSum}.`;

  let entries = document.querySelector('.finaloutput .user-entries p');
  entries.innerHTML = `Final number of entries is ${i}.`;

  let aver = document.querySelector('.finaloutput .user-average p');
  aver.innerHTML = `Final average is ${average}.`;
});
