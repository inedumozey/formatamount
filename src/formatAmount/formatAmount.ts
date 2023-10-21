function formatAmount(numy: string | number) {
  const num = (numy.toString()).split(".");
  const digit = num[0];

  // resolve decimal
  let decimal: string;
  decimal = num[1] ? (num[1].length < 2 ? `${num[1]}0` : num[1]) : "00";

  // resolve digits
  var dummyArray = [];
  var count;
  let result = "";

  for (let i = 0; i < digit.length; i++) {
    dummyArray.push(digit[i]);
  }
  count = dummyArray.length;

  if (count < 4) {
    for (let i = 0; i < dummyArray.length; i++) {
      result += dummyArray[i];
    }
    return result.concat(".").concat(decimal);
  } else if (count == 4) {
    dummyArray.splice(1, 0, ",");
    for (let i = 0; i < dummyArray.length; i++) {
      result += dummyArray[i];
    }

    return result.concat(".").concat(decimal);
  } else {
    let anotherCount = count;
    for (let i = 0; i < count; i++) {
      if (anotherCount > 0 && anotherCount < 4) {
        for (let i = 0; i < dummyArray.length; i++) {
          result += dummyArray[i];
        }
        return result.concat(".").concat(decimal);

      } else if (anotherCount == 4) {
        dummyArray.splice(1, 0, ",");

        for (let i = 0; i < dummyArray.length; i++) {
          result += dummyArray[i];
        }

        return result.concat(".").concat(decimal);

      } else {
        dummyArray.splice(anotherCount - 3, 0, ",");
        anotherCount -= 3;
      }
    }
  }
}


export default formatAmount;