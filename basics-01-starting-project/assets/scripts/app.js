const defaultResult = 0; // Constant 
let currentResult = defaultResult; // Initialization
let logEntries = [];
function getUserNumberInput(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, CalcNumber){
    const calculationDescription = `${resultBeforeCalc} ${operator} ${CalcNumber}`;
    // Object Creation
    const logEntry = {
        operation : operator,
        prevresult : resultBeforeCalc,
        number : CalcNumber,
        result : currentResult
    };
    // Pushing the object into an array
    logEntries.push(logEntry);
    // Displaying the log into the console
    console.log(logEntry.operation);
    outputResult(currentResult, calculationDescription);
}

function calculateResult(calculationType){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if(calculationType === 'add'){
        currentResult = currentResult + enteredNumber; // use parseInt(userInput.value)
        mathOperator = '+';
    }else if(calculationType === 'sub'){
        currentResult = currentResult - enteredNumber; // use parseInt(userInput.value)
        mathOperator = '-';
    }else if(calculationType === 'mul'){
        currentResult = currentResult * enteredNumber; // use parseInt(userInput.value)
        mathOperator = '*';
    }else if(calculationType === 'div'){
        currentResult = currentResult / enteredNumber; // use parseInt(userInput.value)
        mathOperator = '/';
    }
    
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
}

function add(){
    calculateResult('add');
}

function subtract(){
    calculateResult('sub');
}

function multiply(){
    calculateResult('mul');
}

function divide(){
    calculateResult('div');
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

