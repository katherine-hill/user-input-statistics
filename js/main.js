//create variable for form
//use variable to target input

let userInput = 0;
let userSum = 0; //user total
let i= 0; //user entries
let average = 0; //average
let enteredAmt = document.querySelector('.input-container span');
const mainForm = document.querySelector('.form');
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
  userSum = userInput + userSum;
  i++;
  average = userSum / i;

  if (isNaN(userInput)) {
    alert("Try again, kiddo.")
  };

  const input = document.querySelector('.output-container .user-input p');
  input.innerHTML = `Current input is ${userInput}!!!!`;

  const sum = document.querySelector('.output-container .user-sum p');
  sum.innerHTML = `Current sum is ${userSum}!!!!!!`;

  const entries = document.querySelector('.output-container .user-entries p');
  entries.innerHTML = `Current entries ${i}!!!!!`;

  const aver = document.querySelector('.output-container .user-average p');
  aver.innerHTML = `Current average is ${average}!!!!`;
});

//separate listen for finished click & innerHTML
finishedButton.addEventListener('click', (event) => {

  let input = document.querySelector('.finaloutput .user-input p');
  input.innerHTML = `Current entry is ${userInput}`;

  let sum = document.querySelector('.finaloutput .user-sum p');
  sum.innerHTML = `Current sum is ${userSum}`;

  let entries = document.querySelector('.finaloutput .user-entries p');
  entries.innerHTML = `Current entries is ${i}`;

  let aver = document.querySelector('.finaloutput .user-average p');
  aver.innerHTML = `Current average is ${average}`;
});
