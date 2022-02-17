

document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeValue = parseFloat(document.getElementById('income').value);

    const foodValue = parseFloat(document.getElementById('food').value);

    const rentValue = parseFloat(document.getElementById('rent').value);

    const clothesValue = parseFloat(document.getElementById('clothes').value);


    const totalExpenses = parseFloat((foodValue + rentValue + clothesValue));
    const nowBalance = parseFloat(incomeValue - (foodValue + rentValue + clothesValue));

    document.getElementById('total-expenses').innerText = totalExpenses;
    document.getElementById('total-balance').innerText = nowBalance;


})



document.getElementById('total-save').addEventListener('click', function () {

    const incomeValue = parseFloat(document.getElementById('income').value);

    const savingsValue = parseFloat(document.getElementById('savings').value);

    const foodValue = parseFloat(document.getElementById('food').value);

    const rentValue = parseFloat(document.getElementById('rent').value);

    const clothesValue = parseFloat(document.getElementById('clothes').value);

    const totalExpenses = parseFloat((foodValue + rentValue + clothesValue));

    const nowBalance = parseFloat(incomeValue - (foodValue + rentValue + clothesValue));
    const totalSavings = parseFloat((savingsValue / 100) * nowBalance);

   

    document.getElementById('saving-amount').innerText = totalSavings;

    const remainingBalance = incomeValue - (totalExpenses + totalSavings);

    document.getElementById('remaining-balance').innerText = remainingBalance;
    
})