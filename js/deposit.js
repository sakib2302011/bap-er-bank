document.getElementById('btn-deposit').addEventListener('click', function() {
    // value from deposit field
    const depositField = document.getElementById('deposit-field');
    const newDepositString = depositField.value;
    const newDeposit = parseFloat(newDepositString);

    if (isNaN(newDeposit) || newDeposit <= 0) {
        alert('Please enter a valid positive number');
        return;
    }

    // value from previous deposit
    const depositTotal = document.getElementById('deposit-total');
    const currentDepositTotalString = depositTotal.innerText;
    const currentDepositTotal = parseFloat(currentDepositTotalString);

    // value from total balance
    const balanceTotal = document.getElementById('balance-total');
    const newTotalBalanceString = balanceTotal.innerText;
    const newTotalBalance = parseFloat(newTotalBalanceString);

    // calculation
    const totalDeposit = currentDepositTotal + newDeposit;
    const totalBalance = newTotalBalance + newDeposit;

    // update amount
    depositTotal.innerText = totalDeposit;
    balanceTotal.innerText = totalBalance;

    // clear deposit field
    depositField.value = '';
});
