
function add(x,y){
    return(x+y);
}

function subtract(x,y){
    return(x-y);
}

function multiply(x,y){
    return(x*y);
}

function divide(x,y){
    return(x/y);
}

function operate(x,y,ops){
    if(ops == '+'){
        return(add(x,y));}
    if(ops == '-'){
            return(subtract(x,y));}
    if(ops == '*'){
            return(multiply(x,y));}
    if(ops == '/'){
            return(divide(x,y));}
}

function checkPeriod(string){
    for(let i = 0; i < string.length; i++){
        if(string[i] == '.'){
            return(false);
        }
    }
    return(true);
}

let topOutput = ``;
let result = ``;


document.getElementById('topoutput').innerText = ` `;
document.getElementById('bottomoutput').innerText = " ";


let numberButtons = document.querySelectorAll('.number');

for (i of numberButtons) {
  i.addEventListener('click', function() {
    topOutput += `${this.innerText}`;
    document.getElementById('topoutput').innerText = (topOutput);
});
}

let operators = document.querySelectorAll('.operator');

for (j of operators) {
    j.addEventListener('click', function() {
      topOutput += ` ${this.innerText} `;
      document.getElementById('topoutput').innerText = (topOutput); 
  });
  }







let decimal = document.querySelector('#Decimal');

decimal.addEventListener('click', () => {
    if(checkPeriod(topOutput) == true){
        topOutput += '.';
        document.getElementById('topoutput').innerText = topOutput;}
});

let clear = document.querySelector('#clear');

clear.addEventListener('click',()=>{
    topOutput = '';
    result = '';
    document.getElementById('topoutput').innerText = (topOutput);
    document.getElementById('bottomoutput').innerText = result;
});

let Del = document.querySelector('#delete');

Del.addEventListener('click',() => {
    if(topOutput.length >= 1){
        topOutput = topOutput.slice(0,-1);
        document.getElementById('topoutput').innerText = (topOutput);
    }
});


let Equa = document.querySelector('#Equal');


Equa.addEventListener('click', () => {
    
})










