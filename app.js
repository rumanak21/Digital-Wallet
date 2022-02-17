


function calculateIncome(isAdd) {

    const incomeValue = parseFloat(document.getElementById('income').value);

    const foodValue = parseFloat(document.getElementById('food').value);

    const rentValue = parseFloat(document.getElementById('rent').value);

    const clothesValue = parseFloat(document.getElementById('clothes').value);



    if (isAdd == true) {
        const totalExpenses = parseFloat((foodValue + rentValue + clothesValue));
        return totalExpenses;
    }

    else {
        const nowBalance = parseFloat(incomeValue - (foodValue + rentValue + clothesValue));
        return nowBalance;
    }

}


document.getElementById('calculate-btn').addEventListener('click', function () {

    document.getElementById('total-expenses').innerText = calculateIncome(true);
    document.getElementById('total-balance').innerText = calculateIncome(false);


})


document.getElementById('total-save').addEventListener('click', function () {

    const incomeValue = parseFloat(document.getElementById('income').value);

    const savingsValue = parseFloat(document.getElementById('savings').value);
    const totalSavings = parseFloat((savingsValue / 100) * calculateIncome(false));

    document.getElementById('saving-amount').innerText = totalSavings;

    const remainingBalance = incomeValue - (calculateIncome(true) + totalSavings);

    document.getElementById('remaining-balance').innerText = remainingBalance;

})