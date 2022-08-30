import { convertToRoman } from "../src/utils/romanNumberCalculator";
import { faker } from '@faker-js/faker'

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


describe("Home", () => {
  it("Should convert number to roman algorithm", () => {
    // input: faker.helpers.objectValue({ myProperty: 'anyValue' })
    // input: faker.helpers.objectValue()
    let numberToBeConverted = faker.datatype.number({
      min: 200,
      max: 200
    })
    expect(convertToRoman(numberToBeConverted)).toBe("CC");
  });
});
