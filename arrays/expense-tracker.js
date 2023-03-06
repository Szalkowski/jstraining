const account = {
    name: 'Maciej',
    expenses:[],
    income: [],
    addIncome: function(description, amount) {
      this.income.push({description, amount})
    },
    addExpense: function(description, amount) {
        this.expenses.push({description, amount})
    },
    getAccountSummary: function() {
        let totalExpenses = 0
        let totalIncome = 0
        this.expenses.forEach(function(expense) {
            totalExpenses = totalExpenses + expense.amount
        })
        this.income.forEach(function(income) {
            totalIncome = totalIncome + income.amount
        })

        const balance = totalIncome - totalExpenses
        return `${this.name} has a balance of $${balance}. ${totalIncome} in income and ${totalExpenses} in expenses`
    }
}

account.addIncome('Job',1000)
account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
console.log(account.getAccountSummary())