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

function checkDigitsInName(name){
    for(let i = 0; i < name.length ; i++){
        if (!isNaN(name[i]) && name[i] !== " ") {
            return true;
        }
    }
    return false;
}
console.log(checkDigitsInName("Abdullah!23"));


// problem - 04


function calculateFinalScore(obj){
    let totalScore = obj.testScore + obj.schoolGrade;
    if(obj.isFFamily === true){
        totalScore += 20;
    }else{
        return false;
    }
    return totalScore >= 80;
}
const newObj =  {name: "Rajib", testScore:45, schoolGrade:25,isFFamily:true };
const objectPrint = calculateFinalScore(newObj)
console.log(objectPrint);
