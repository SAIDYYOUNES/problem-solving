function reverseInteger(num) {
    let str = num.toString();
    let arr = str.split("");
    let reversed = arr.reverse();
    let newStr = reversed.join("");
    let reversedInt = parseInt(newStr);
    return reversedInt;
}

console.log(reverseInteger(12345));
