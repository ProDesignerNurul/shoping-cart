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


document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumberValue(true);
    const caseTotaPrice = newCaseNumber * 59;
    const casseTotalElement = document.getElementById('case-total');
    casseTotalElement.innerText = caseTotaPrice;
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    updateCaseNumberValue(false);
})