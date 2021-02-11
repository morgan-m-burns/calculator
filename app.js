// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM
const addInput = document.getElementById('add-input');
const secondAdd = document.getElementById('second-add');
const addOutput = document.getElementById('add-output');
const addResults = document.getElementById('add-results');
const subtractInput = document.getElementById('subtract-input');
const secondSubtract = document.getElementById('second-subtract');
const subtractOutput = document.getElementById('subtract-output');
const subtractResults = document.getElementById('subtract-results');
const multiplyInput = document.getElementById('multiply-input');
const secondMultiply = document.getElementById('second-multiply');
const multiplyOutput = document.getElementById('multiply-output');
const multiplyResults = document.getElementById('multiply-results');
const divideInput = document.getElementById('divide-input');
const secondDivide = document.getElementById('second-divide');
const divideOutput = document.getElementById('divide-output');
const divideResults = document.getElementById('divide-results');

addOutput.addEventListener('click', () => {
console.log('add works');
addResults.textContent = Number(addInput.value) + Number(secondAdd.value);

});


subtractOutput.addEventListener('click', () => {
    console.log('subtract works');
    subtractResults.textContent = Number(subtractInput.value) - Number(secondSubtract.value);
});

multiplyOutput.addEventListener('click', () => {
    console.log('multiply works');
    multiplyResults.textContent = Number(multiplyInput.value) * Number(secondMultiply.value);
});
    
divideOutput.addEventListener('click' , () => {
    console.log('divide works');
    divideResults.textContent = Number(divideInput.value) / Number(secondDivide.value);
    console.log(divideInput);
    console.log(secondDivide);
});

