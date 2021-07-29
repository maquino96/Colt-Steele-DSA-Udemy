function sameFrequency(num1, num2) {
  if (num1.length !== num2.length) {
    return false;
  }

  const fObj = {};

  num1 = num1.toString();
  num2 = num2.toString();

  for (let char of num1) {
    fObj[char] ? (fObj[char] = fObj[char] + 1) : (fObj[char] = 1);
  }
  // console.log(fObj)
  for (let char of num2) {
    // console.log(fObj)
    if (!fObj[char]) {
      return false;
    } else {
      fObj[char] -= 1;
    }
  }
  return true;
}

console.log(sameFrequency(3589578, 5879385));
