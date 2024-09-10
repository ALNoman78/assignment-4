// problem - 01

function calculateTax(monthlyIncome, monthlyExpense) {
  if (
    monthlyIncome < 0 ||
    monthlyExpense < 0 ||
    monthlyIncome < monthlyExpense
  ) {
    return "Invalid Input";
  }
  let income = monthlyIncome;
  let expense = monthlyExpense;
  let remainingAmount = income - expense;
  let taxAmount = remainingAmount * 0.2;
  return taxAmount;
}
const totalIncome = calculateTax(34000, 1753);
console.log(totalIncome);

//  problem - 02

function sendNotification(email) {
  if (email.indexOf("@") === -1) {
    return "Invalid Email";
  }
  let convertArr = email.split("@");
  let b =
    convertArr[0] +
    " sent you an email from " +
    convertArr[convertArr.length - 1];
  return b;
}
const userEmail = "nadim.naem5@outlook.com";
const notification = sendNotification(userEmail);
console.log(notification);

// problem - 03

// function checkDigitsInName(name) {
//     let number = [1,2,3,4,5,6,7,8,9,0]
//     let result = false;
//     for(let i = 0; i < name.length ; i++){
//         if (name[i] === number) {
//             result= true;
//         }
//     }
//     return false;
// }
// const userName = "Raj123"
// const checkUserName = checkDigitsInName(userName)
// console.log(checkUserName);

//  problem - 04

function calculateFinalScore(score) {
    if (typeof score !== "object") {
        return "Invalid Input";
    }
    if (typeof score.testScore !== "number" || typeof score.schoolGrade !== "number" || typeof score.isFFamily !== "boolean") {
        return "Invalid Input"
    }
    if (score.testScore < 0 || score.testScore >= 50 || score.schoolGrade < 0 || score.schoolGrade >= 30) {
        return "Invalid Input"
    }
    let totalScore = score.testScore + score.schoolGrade;
    if (score.isFFamily === true) {
        totalScore += 20;
    } else {
        return false;
    }
    return totalScore >= 80;
}
const obj = { name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false };
const x = calculateFinalScore(obj);
console.log(x);


// problem - 05