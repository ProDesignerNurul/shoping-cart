function updateCaseNumberValue(isIncries){
    const caseNumberField = document.getElementById('case-input-field');
    const caseNumberString = caseNumberField.value;
    const preiviousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;
    if(isIncries === true) {
        newCaseNumber = preiviousCaseNumber + 1;
    }
    else{
        newCaseNumber = preiviousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}


function updateCaseTotalPrice (newCaseNumber){
    const caseTotaPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotaPrice;
}