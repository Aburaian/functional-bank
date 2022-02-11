// deposit added

document.getElementById("deposit-btn").addEventListener("click", function () {
    const depositAdded = document.getElementById("Deposit-added");
    const newDepositAdded = depositAdded.value;
    depositAdded.value = "";;

    let depositInput = document.getElementById("deposit-input");
    let currentDepositAdded = depositInput.innerText;

    depositInput.innerText = Number(newDepositAdded) + Number(currentDepositAdded);

    let bapBalance = document.getElementById("total-balance");
    let totalBalance = bapBalance.innerText;
    bapBalance.innerText = Number(totalBalance) + Number(newDepositAdded);
});

// withdraw and balance
document.getElementById("withdraw-btn").addEventListener("click", function () {
    let withdrawAdded = document.getElementById("withdraw-added");
    let withdrawNewAdded = withdrawAdded.value;
    withdrawAdded.value = "";

    let withdrawAmount = document.getElementById("withdraw-amount")
    let withdrawAfterAdded = withdrawAmount.innerText;
    withdrawAmount.innerText = Number(withdrawNewAdded) + Number(withdrawAfterAdded);
    let bapBalance = document.getElementById("total-balance");
    let totalBalance = bapBalance.innerText;
    bapBalance.innerText = Number(totalBalance) - Number(withdrawNewAdded);

})