
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
    if(op2String.length == 0 && currentOperator == '÷'){
        alert("snarks");
        return;
    }
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

    if(equationString.length == 0 ){
            return; 
    }     
    
    let kool = equationString.toString().split('');

    if(kool[kool.length - 1] == '+' ||
    kool[kool.length - 1] == '−' ||
    kool[kool.length - 1] == '×' ||
    kool[kool.length - 1] == '÷'
    )
    {return;}

    if(operatorOn != true){

        equationString += `${this.innerText}`;
        document.getElementById('topoutput').innerText = equationString; 

        currentOperator = `${this.innerText}`;

        operatorOn = true;
        hasPeriod = false;
    }
    else if (operatorOn == true) {
        armadillo();
        equationString = op1String;

        equationString += `${this.innerText}`;
        document.getElementById('topoutput').innerText = equationString; 
        currentOperator = `${this.innerText}`;
        operatorOn = true;
        hasPeriod = false;
    }
  });
}


function armadillo() {
    
    if(op1String.length != 0 && op2String.length != 0){
        let op1 = parseFloat(op1String);
        let op2 = parseFloat(op2String);
        let opR = currentOperator;
    
        let end = (operate(op1,op2,opR)).toFixed(2);
        document.getElementById('bottomoutput').innerText = end; 
    
        op1String = end;
        op2String = "";
        equationString = end;
    
        currentOperator = "";
        operatorOn = false;
    }

    return;
}


let Equa = document.querySelector('#Equal');


Equa.addEventListener('click',  armadillo);


let clear = document.querySelector('#clear');

clear.addEventListener('click',()=>{
    equationString = '';
    equationEnd = 0;

    currentOperator = "";

    hasPeriod = false;
    operatorOn = false;

    op1String = "";
    op2String = "";

    document.getElementById('topoutput').innerText = equationString;
    document.getElementById('bottomoutput').innerText = equationEnd;
});

let decimal = document.querySelector('#Decimal');

decimal.addEventListener('click', () => {
    
    if(hasPeriod == false){

        if(operatorOn == false){
            op1String += '.';
        }
        if(operatorOn == true){
            op2String += '.';
        }
        equationString += '.';
        document.getElementById('topoutput').innerText = equationString;
        hasPeriod = true;
}
});



let Del = document.querySelector('#delete');

Del.addEventListener('click',() => {
    if(equationString.length >= 1){
    let hool = equationString.split('');
    if(hool[hool.length - 1] == '+' ||
            hool[hool.length - 1] == '−' ||
            hool[hool.length - 1] == '×' ||
            hool[hool.length - 1] == '÷'
    )
    {
        operatorOn = false;
    }
    else if (operatorOn == true){
        if(hool[hool.length - 1] == '.'){
            hasPeriod =false;
        }
        op2String = op2String.slice(0,-1);
    }
    else if (operatorOn == false){
        if(hool[hool.length - 1] == '.'){
            hasPeriod =false;
        }
        op1String = op1String.slice(0,-1);
    }
    
        equationString = equationString.slice(0,-1);
        document.getElementById('topoutput').innerText = equationString;
    }
});




/*



let Del = document.querySelector('#delete');

Del.addEventListener('click',() => {
    if(topOutput.length >= 1){
        topOutput = topOutput.slice(0,-1);
        document.getElementById('topoutput').innerText = (topOutput);
    }
});




*/







