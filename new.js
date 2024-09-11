function checkDigitsInName(name) {
    if (typeof name !== "string") {
        return "Invalid Input";
    }
    let arr = ["0","1","2","3","4","5","6","7","8","9"]
    for(let i = 0; i < arr.length ; i++){
        if(name.includes(arr[i])){
            return true;
        }
    }
    return false;
}
const name = "raju"
const va = checkDigitsInName(name);
console.log(va);