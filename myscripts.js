
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
    if(ops == '−'){
            return(subtract(x,y));}
    if(ops == '×'){
            return(multiply(x,y));}
    if(ops == '÷'){
            return(divide(x,y));}
}


let equationString = "";
let equationEnd = 0;

let currentOperator = "";
let operand1 = 0;
let operand2 = 0;


let hasPeriod = false;
let operatorOn = false;

let op1String = "";
let op2String = "";


let numberButtons = document.querySelectorAll('.number');

for (i of numberButtons) {
    i.addEventListener('click', function() {
        if(operatorOn == false){
            op1String += `${this.innerText}`;
        }
        else if(operatorOn == true){
            op2String += `${this.innerText}`;
        }

        equationString += `${this.innerText}`;
        document.getElementById('topoutput').innerText = equationString;
});
}

let zero = document.querySelector('#zero');

zero.addEventListener('click', () => {
    if(equationString.length != 0){
        if(operatorOn == false){
            op1String += `0`;
        }
        else if(operatorOn == true){
            op2String += `0`;
        }
        equationString += '0';
        document.getElementById('topoutput').innerText = equationString;
    }
});

let operators = document.querySelectorAll('.operator');

for (j of operators) {
    j.addEventListener('click', function() {
        if(equationString.length != 0 && operatorOn != true){

            equationString += `${this.innerText}`;
            document.getElementById('topoutput').innerText = equationString; 

            currentOperator = `${this.innerText}`;

            operatorOn = true;
    }
  });
}

let Equa = document.querySelector('#Equal');


Equa.addEventListener('click', () => {
    
    let op1 = parseFloat(op1String);
    let op2 = parseFloat(op2String);
    let opR = currentOperator;

    let end = operate(op1,op2,opR);
    document.getElementById('bottomoutput').innerText = end; 
})





/*
let topOutput = '';
let result = '';





let thereOps = false;
let currentOps = '';




document.getElementById('topoutput').innerText = ` `;
document.getElementById('bottomoutput').innerText = " ";


let operators = document.querySelectorAll('.operator');

for (j of operators) {
    j.addEventListener('click', function() {

    if(thereOps == false){
      topOutput += `${this.innerText}`;
      document.getElementById('topoutput').innerText = topOutput; 
      currentOps = `${this.innerText}`;
      console.log(currentOps);
      topOutput = '';
    }
    else{

    }
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






*/







