document.getElementById('btn-withdraw').addEventListener('click', function() {
    // console.log('Withdraw button clicked'); // Debugging output

    // value from withdraw field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawString = withdrawField.value;
    const newWithdraw = parseFloat(newWithdrawString);
    console.log('Withdraw amount:', newWithdraw); // Debugging output

    if (isNaN(newWithdraw) || newWithdraw <= 0) {
        alert('Please enter a valid positive number');
        return;
    }

    // value from previous withdraw
    const withdrawTotal = document.getElementById('withdraw-total');
    const currentWithdrawTotalString = withdrawTotal.innerText;
    const currentWithdrawTotal = parseFloat(currentWithdrawTotalString);
    // console.log('Current withdraw total:', currentWithdrawTotal); // Debugging output

    // value from total balance
    const balanceTotal = document.getElementById('balance-total');
    const newTotalBalanceString = balanceTotal.innerText;
    const newTotalBalance = parseFloat(newTotalBalanceString);
    // console.log('Current balance:', newTotalBalance); // Debugging output

    if (newWithdraw > newTotalBalance) {
        alert('Insufficient balance');
        return;
    }

    // calculation
    const totalWithdraw = currentWithdrawTotal + newWithdraw;
    const totalBalance = newTotalBalance - newWithdraw;

    // update amount
    withdrawTotal.innerText = totalWithdraw;
    balanceTotal.innerText = totalBalance;
    console.log('Updated withdraw total:', totalWithdraw); // Debugging output
    console.log('Updated balance:', totalBalance); // Debugging output

    // clear withdraw field
    withdrawField.value = '';
});
