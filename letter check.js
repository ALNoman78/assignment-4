function checkDigitsInName(name) {
    if (typeof name !== "string") {
        return "Invalid Input";
    }

    for (let i = 0; i < name.length; i++) {
        if (!isNaN(name[i]) && name[i] !== "") {
        return true;
        }
    }
    return false;
}
console.log(checkDigitsInName("noman"));

//if name + number = string function will print boolean value true / false

