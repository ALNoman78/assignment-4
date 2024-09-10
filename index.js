// problem - 01

function calculateTax(monthlyIncome, monthlyExpense) {
    if ((monthlyIncome < 0 || monthlyExpense < 0 ) || 
    monthlyIncome < monthlyExpense
    ) {
        return "Invalid Input";
    }
    let income = monthlyIncome;
    let expense = monthlyExpense;
    let remainingAmount = income - expense;
    let taxAmount = remainingAmount * 0.20;
    return taxAmount;
}
const totalIncome = calculateTax(34000, 1753);
console.log(totalIncome);
