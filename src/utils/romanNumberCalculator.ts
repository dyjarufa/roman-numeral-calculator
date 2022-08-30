export function convertToRoman(num: number) {

  const romanNumber = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  type romanKeys = keyof typeof romanNumber

  let roman = "";
  
  let key: romanKeys;

  for (key in romanNumber) {
    while(num >= romanNumber[key]) {
      roman += key
      num -= romanNumber[key]
    }
  }

  return roman
}

