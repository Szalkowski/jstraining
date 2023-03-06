const myAccount = {
    name: "Maciej",
    expenses: 0,
    income: 0
}

const addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}
const addIncome = function (account, amount) {
    account.income = account.income + amount
}
const getAccountSummary = function (account) {
    const balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses`
}
const resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

addIncome(myAccount, 1000)
addExpense(myAccount, 50)
addExpense(myAccount, 50)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))