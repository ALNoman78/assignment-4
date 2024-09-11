function checkDigitsInName(name) {
    if (typeof name !== "string") {
        return "Invalid Input";
    }
    let arr = ["0","1","2","3","4","5","6","7","8","9"]
    for(let i = 0; i < arr.length ; i++){
        console.log(arr[i]);
    }
}
const name = "raju123"
const va = checkDigitsInName(name);
console.log(va);