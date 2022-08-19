document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updateCaseNumberValue(true);
    updateCaseTotalPrice(newPhoneNumber);
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updateCaseNumberValue(false);
    updateCaseTotalPrice(newPhoneNumber);
})