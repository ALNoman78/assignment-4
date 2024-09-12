// problem no - 01

function calculateTax(income,expenses){
    if ((typeof income !== "number" && typeof expenses !== "number") || income < expenses) {
        return "invalid data"
    }
    let totalAmount = income - expenses
    let taxAmount = totalAmount * 0.20;
    if (income <= expenses) {
        return "Invalid Information"
    }
    return taxAmount;
}
console.log(calculateTax( 5000,1500));

// problem no - 02

function sendNotification(email){
    if (email.indexOf("@") === -1) {
        return "Invalid Email"
    }
    let emailName = email.split("@")
    let connectMail = emailName[0] + " send you an email " + emailName[emailName.length - 1];
    return connectMail;
}
const userEmail = "Moule@taekook.programminghero";
const value = sendNotification(userEmail)
console.log(value);


// problem no - 03