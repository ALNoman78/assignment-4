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


//  problem - 02

function sendNotification(email) {
    if (email.indexOf('@') === -1) {
        return "Invalid Email"
    }
    let convertArr = email.split("@");
    let b = convertArr[0] + " sent you an email from " + convertArr[convertArr.length-1]
    return b;
}
const userEmail = "nadim.naem5@outlook.com";
const notification = sendNotification(userEmail)
console.log(notification);