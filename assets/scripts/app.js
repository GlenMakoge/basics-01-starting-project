let currentResults = 0;
let logresults = [1, 3, 4]
let description;

function getUserInput(){
    return parseInt(userInput.value)
}

function getDescription(operator){
    return `${currentResults} ${operator} ${getUserInput()}`
}

function add(){
    const calcDescription = getDescription('+')
    currentResults +=   getUserInput(); // 4 + 9;
    let resultsObj = {
        results: currentResults,
        description: calcDescription
    }
    logresults.push(resultsObj)
    console.log(logresults)
     outputResult(currentResults, calcDescription)
    // alert(result);
}

addBtn.addEventListener('click', add)

function subtract(){
    const calcDescription = getDescription('-')
    currentResults -= getUserInput(); // 4 + 9;
    let resultsObj = {
        results: currentResults,
        description: calcDescription
    }
    logresults.push(resultsObj)
    console.log(logresults)
     outputResult(currentResults, calcDescription)
    // alert(result);
}

subtractBtn.addEventListener('click', subtract)

function multiply(){
    const calcDescription = getDescription('*')
    currentResults *= getUserInput(); // 4 + 9;
    let resultsObj = {
        results: currentResults,
        description: calcDescription
    }
    logresults.push(resultsObj)
    console.log(logresults)
     outputResult(currentResults, calcDescription)
    // alert(result);
}

multiplyBtn.addEventListener('click', multiply)

function divide(){
    const calcDescription = getDescription('/')
    currentResults /= getUserInput(); // 4 + 9;
    let resultsObj = {
        results: currentResults,
        description: calcDescription
    }
    logresults.push(resultsObj)
    console.log(logresults)
     outputResult(currentResults, calcDescription)
    // alert(result);
}

divideBtn.addEventListener('click', divide)

// outputResult(currentResult, '')