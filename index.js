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




function sendNotification(email) {
    if (email.indexOf("@") === -1) {
        return "Invalid Email";
    }
    let convertArr = email.split("@");
    let b =convertArr[0] + " sent you an email from " + convertArr[convertArr.length - 1];
    return b;
}



function checkDigitsInName(name) {
    if (typeof name !== "string") {
        return "Invalid Input";
    }
    for(let i = 0; i < name.length ; i++){
        if(!isNaN(name[i]) && name[i] !== ""){
            return true;
        }
    }
    return false;
}



function calculateFinalScore(obj) {
    if (typeof obj !== "object") {
        return "Invalid Input";
    }
    if (typeof obj.testScore !== "number" || typeof obj.schoolGrade !== "number" || typeof obj.isFFamily !== "boolean") {
        return "Invalid Input"
    }
    if (obj.testScore >= 50 || obj.schoolGrade >= 30) {
        return "Invalid Input"
    }
    let totalScore = obj.testScore + obj.schoolGrade;
    if (obj.isFFamily === true) {
        totalScore += 20;
    } else {
        return false;
    }
    return totalScore >= 80;
}




function  waitingTime(timesArray,serialNumber){
    if (Array.isArray(timesArray) !== true|| typeof serialNumber !== "number") {
        return "Invalid Input";
    }
    let sum = 0;
    let avg = timesArray.length
    for (const e of timesArray) {
        sum += e;
    }
    let avgTime = sum / avg;
    let serialNumberBefore = serialNumber - avg - 1;
    let waitingTime = serialNumberBefore * Math.round(avgTime);
    return waitingTime;
}