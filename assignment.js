// problem no - 01

function calculateTax(income, expenses) {
  if (
    (typeof income !== "number" && typeof expenses !== "number") ||
    income < expenses
  ) {
    return "invalid data";
  }
  let totalAmount = income - expenses;
  let taxAmount = totalAmount * 0.2;
  if (income <= expenses) {
    return "Invalid Information";
  }
  return taxAmount;
}
console.log(calculateTax(5000, 1500));

// problem no - 02

function sendNotification(email) {
  if (email.indexOf("@") === -1) {
    return "Invalid Email";
  }
  let emailName = email.split("@");
  let connectMail =
    emailName[0] + " send you an email " + emailName[emailName.length - 1];
  return connectMail;
}
const userEmail = "Moule@taekook.programminghero";
const value = sendNotification(userEmail);
console.log(value);

// problem no - 03

function checkDigitsInName(name) {
  for (let i = 0; i < name.length; i++) {
    if (!isNaN(name[i]) && name[i] !== " ") {
      return true;
    }
  }
  return false;
}
console.log(checkDigitsInName("Abdullah!23"));

// problem - 04

function calculateFinalScore(obj) {
  if (
    typeof obj !== "object" ||
    typeof obj.testScore !== "number" ||
    typeof obj.schoolGrade !== "number" ||
    typeof obj.isFFamily !== "boolean"
  ) {
    return "Invalid Input";
  }
  if (obj.testScore >= 50 || obj.schoolGrade >= 30) {
    return "Invalid Input";
  }
  let totalScore = obj.testScore + obj.schoolGrade;
  if (obj.isFFamily === true) {
    totalScore += 20;
  } else {
    return false;
  }
  return totalScore >= 80;
}
const newObj = {
  name: "Rajib",
  testScore: 45,
  schoolGrade: 25,
  isFFamily: true,
};
const objectPrint = calculateFinalScore(newObj);
console.log(objectPrint);

//  problem - 05

function waitingTime(waitingTimes, serialNumber) {
    let sum = 0;
    for (const e of waitingTimes) {
        sum += e;
    }
    let avgTime = sum / waitingTimes.length;
    let serialNumberBefore = serialNumber - waitingTimes.length - 1;
    let waitTime = serialNumberBefore * Math.round(avgTime)
    return waitTime;
}
const waintgArray = [3, 5, 7, 11, 6];
const availavleTime = waitingTime(waintgArray, 10);
console.log(availavleTime);
