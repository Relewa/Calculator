function add(numOne,numTwo){
    return numOne + numTwo;
}

function subtract(numOne,numTwo){
    return numOne - numTwo;
}

function divide(numOne,numTwo){
    return numOne/numTwo;
}

function mulitply(numOne,numTwo){
    return numOne * numTwo;
}

function operator(numOne,numTwo,opp){

    if (opp=="+"){
        return add(numOne,numTwo);
    }
    else if(opp=="-"){
        return subtract(numOne,numTwo);
    }
    else if(opp=="*"){
        return mulitply(numOne,numTwo);
    }
    else if(opp=="/"){
        return divide(numOne,numTwo);
    }
}

const display = document.getElementById('display');
let displayArr = [];
let opStr = "";
let result = 0;
document.addEventListener("click",(e)=>{
    console.log(e.target.className);
    display.innerText += e.target.id;
    if (e.target.className == "button"){
        displayArr.push(e.target.id);
    }
    if (e.target.id=="="){
        opStr = (displayArr.slice(0,displayArr.lastIndexOf("="))).join("");
        result = operator(parseInt(opStr[0]),parseInt(opStr[2]),opStr[1]);
        display.innerText = result;
    }
    if (e.target.id=="clear"){
        display.innerText = "";
    }
});


// [1+2+3-4=]