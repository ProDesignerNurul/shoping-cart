document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumberValue(true);
    updateCaseTotalPrice(newCaseNumber);
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumberValue(false);
    updateCaseTotalPrice(newCaseNumber);
})