function chunk(arr, n) {
  let chunked = [];
  if (n > arr.length) {
    return chunked;
  } else if (n == 0) {
    return arr;
  } else {
    for (let i = 0; i < arr.length; i += n) {
      chunked.push(arr.slice(i, i + n));
    }
    return chunked;
  }
}
console.log(chunk([1, 2, 3, 4, 5], 10));
function ai(a, b) {
  let count = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      count++;
    }
  }
  if (a.length > b.length + 2 || count > 2) {
    console.log("there is more than 2 difference");
  } else {
    if (a.length > b.length) {
      for (let i = 0; i < a.length; i++) {
        if (!b.includes(a[i])) {
          missingElements.push(a[i]);
        }
      }
      missingElements.forEach((element) => {
        console.log("insert:", element);
      });
    }
    else{

    }
  }
}
