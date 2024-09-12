function checkDigitsInName(name) {
    if (typeof name !== "string") {
        return "Invalid Input";
    }
    for(let i = 0; i < name.length ; i++){
        if(!isNaN(name[i] && name[i] !== " ")){
            return true;
        }
    }
    return false;
}
const name = "raju"
const va = checkDigitsInName(name);
console.log(va);