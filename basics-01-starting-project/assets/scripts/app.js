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

function add(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber; // use parseInt(userInput.value)
    createAndWriteOutput('+', initialResult, enteredNumber);
}

function subtract(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber; // use parseInt(userInput.value)
    createAndWriteOutput('-', initialResult, enteredNumber);
}

function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber; // use parseInt(userInput.value)
    createAndWriteOutput('*', initialResult, enteredNumber);
}

function divide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber; // use parseInt(userInput.value)
    createAndWriteOutput('/', initialResult, enteredNumber);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

