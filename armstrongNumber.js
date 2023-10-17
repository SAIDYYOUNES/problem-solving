    function pow(num) {
    let str = parseInt(num).toString();
    let arr = str.split("");
    console.log(arr);
    // return
    let sum = 0;
    arr.forEach((element) => {
        sum = sum + Math.pow(parseInt(element), arr.length);
    });
    if (num == sum) {
        console.log("number mhayeb");
    } else {
        console.log("number 3iyan");
    }
    }
    pow("371tyfuhj");
