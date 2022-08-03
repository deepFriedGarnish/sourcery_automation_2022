// @ts-check
const { test, expect } = require('@playwright/test');
const { CalculatorPage } = require('../pages/CalculatorPage');

const data = [
  'Prototype',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
];

data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Adding 1 and 5 should result in 6', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);
      const operator1 = '1';
      const operator2 = '5';
      const expectedResult = '6';
  
      await calculatorPage.navigate();
      await calculatorPage.selectBuild(version);
      await calculatorPage.inputValues(operator1, operator2);
      await calculatorPage.selectOperation('Add');
      await calculatorPage.pressCalculate();

      await calculatorPage.AssertAnswerValue(expectedResult);
    });
  
    test('Adding 1 to 5.1 should result in 6 when "Integers only" is checked', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);
      const operator1 = '5.1';
      const operator2 = '1';
      const expectedResult1 = '6.1';
      const expectedResult2 = '6';
  
      await calculatorPage.navigate();
      await calculatorPage.selectBuild(version);
      await calculatorPage.inputValues(operator1, operator2);
      await calculatorPage.selectOperation('Add');
      await calculatorPage.pressCalculate();

      await calculatorPage.AssertAnswerValue(expectedResult1);

      await calculatorPage.checkIntegersOnly();
  
      await calculatorPage.AssertAnswerValue(expectedResult2);
    });
  
    test('Adding a to b should result in an error message', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);
      const operator1 = 'a';
      const operator2 = 'b';
  
      await calculatorPage.navigate();
      await calculatorPage.selectBuild(version);
      await calculatorPage.inputValues(operator1, operator2);
      await calculatorPage.selectOperation('Add');
      await calculatorPage.checkIntegersOnly();
      await calculatorPage.pressCalculate();

      await calculatorPage.AssertErrorMessageText('Number 1 is not a number');
    });
  });
  
  test.describe(version + ': Subtract', () => {
    test('Subtracting 1 from 5 should result in 4', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);
      const operator1 = '5';
      const operator2 = '1';
      const expectedResult = '4';
  
      await calculatorPage.navigate();
      await calculatorPage.selectBuild(version);
      await calculatorPage.inputValues(operator1, operator2);
      await calculatorPage.selectOperation('Subtract');
      await calculatorPage.pressCalculate();

      await calculatorPage.AssertAnswerValue(expectedResult);
    });
  
    test('Subtracting 1 from 5.1 should result in 4 when "Integers only" is checked', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);
      const operator1 = '5.1';
      const operator2 = '1';
      const expectedResult1 = '4.1';
      const expectedResult2 = '4';
  
      await calculatorPage.navigate();
      await calculatorPage.selectBuild(version);
      await calculatorPage.inputValues(operator1, operator2);
      await calculatorPage.selectOperation('Subtract');
      await calculatorPage.pressCalculate();

      await calculatorPage.AssertAnswerValue(expectedResult1);

      await calculatorPage.checkIntegersOnly();
  
      await calculatorPage.AssertAnswerValue(expectedResult2);
    });
  
    test('Subtracting a from b should result in an error message', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);
      const operator1 = 'a';
      const operator2 = 'b';
  
      await calculatorPage.navigate();
      await calculatorPage.selectBuild(version);
      await calculatorPage.inputValues(operator1, operator2);
      await calculatorPage.selectOperation('Subtract');
      await calculatorPage.pressCalculate();
  
      await calculatorPage.AssertErrorMessageText('Number 1 is not a number');
    });
  });
  
  test.describe(version + ': Concatenate', () => {
    test('Concatenating 2 and 3 results in 23', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);
      const operator1 = '2';
      const operator2 = '3';
      const expectedResult = '23';
  
      await calculatorPage.navigate();
      await calculatorPage.selectBuild(version);
      await calculatorPage.inputValues(operator1, operator2);
      await calculatorPage.selectOperation('Concatenate');
      await calculatorPage.pressCalculate();
  
      await calculatorPage.AssertAnswerValue(expectedResult);
    });
  
    test('Concatenating -2 and -3 results in -2-3', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);
      const operator1 = '-2';
      const operator2 = '-3';
      const expectedResult = '-2-3';
  
      await calculatorPage.navigate();
      await calculatorPage.selectBuild(version);
      await calculatorPage.inputValues(operator1, operator2);
      await calculatorPage.selectOperation('Concatenate');
      await calculatorPage.pressCalculate();
  
      await calculatorPage.AssertAnswerValue(expectedResult);
    });
  
    test('Concatenating 5.1 and -8.6 results in 5.1-8.6', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);
      const operator1 = '5.1';
      const operator2 = '-8.6';
      const expectedResult = '5.1-8.6';
  
      await calculatorPage.navigate();
      await calculatorPage.selectBuild(version);
      await calculatorPage.inputValues(operator1, operator2);
      await calculatorPage.selectOperation('Concatenate');
      await calculatorPage.pressCalculate();
  
      await calculatorPage.AssertAnswerValue(expectedResult);
    });
  
    test('Concatenating a and b results in ab', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);
      const operator1 = 'a';
      const operator2 = 'b';
      const expectedResult = 'ab';
  
      await calculatorPage.navigate();
      await calculatorPage.selectBuild(version);
      await calculatorPage.inputValues(operator1, operator2);
      await calculatorPage.selectOperation('Concatenate');
      await calculatorPage.pressCalculate();

      await calculatorPage.AssertAnswerValue(expectedResult);
    });
  });
  
  test.describe(version + ': Divide', () => {
    test('Dividing 60 by 3 should result in 20', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);
      const operator1 = '60';
      const operator2 = '3';
      const expectedResult = '20';
  
      await calculatorPage.navigate();
      await calculatorPage.selectBuild(version);
      await calculatorPage.inputValues(operator1, operator2);
      await calculatorPage.selectOperation('Divide');
      await calculatorPage.pressCalculate();
  
      await calculatorPage.AssertAnswerValue(expectedResult);
    });
  
    test('Dividing 60 by 11 should result in 5 when "Integers only" is checked', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);
      const operator1 = '10';
      const operator2 = '40';
      const expectedResult1 = '0.25';
      const expectedResult2 = '0';
  
      await calculatorPage.navigate();
      await calculatorPage.selectBuild(version);
      await calculatorPage.inputValues(operator1, operator2);
      await calculatorPage.selectOperation('Divide');
      await calculatorPage.pressCalculate();

      await calculatorPage.AssertAnswerValue(expectedResult1);

      await calculatorPage.checkIntegersOnly();
  
      await calculatorPage.AssertAnswerValue(expectedResult2);
    });
  
    test('Dividing a by b should result in an error message', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);
      const operator1 = 'a';
      const operator2 = 'b';
  
      await calculatorPage.navigate();
      await calculatorPage.selectBuild(version);
      await calculatorPage.inputValues(operator1, operator2);
      await calculatorPage.selectOperation('Divide');
      await calculatorPage.pressCalculate();

      await calculatorPage.AssertErrorMessageText('Number 1 is not a number');
    });

    test('Dividing by 0 should result in an error message', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);
      const operator1 = '1';
      const operator2 = '0';
  
      await calculatorPage.navigate();
      await calculatorPage.selectBuild(version);
      await calculatorPage.inputValues(operator1, operator2);
      await calculatorPage.selectOperation('Divide');
      await calculatorPage.pressCalculate();

      await calculatorPage.AssertErrorMessageText('Divide by zero error!');
    });
  });
  
  test.describe(version + ': Other', () => {
    test('Pressing the clear button when "Answer" field is not empty should make the "Answer" field empty', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);
      const operator1 = '1';
      const operator2 = '1';
      const expectedCalculationResult = '2';
      const expectedEndResult = '';
  
      await calculatorPage.navigate();
      await calculatorPage.selectBuild(version);
      await calculatorPage.inputValues(operator1, operator2);
      await calculatorPage.selectOperation('Add');
      await calculatorPage.pressCalculate();

      await calculatorPage.AssertAnswerValue(expectedCalculationResult);

      await calculatorPage.pressClear();
  
      await calculatorPage.AssertAnswerValue(expectedEndResult);
    });
  
    test('Pressing the clear button when "Answer" field is empty should keep the "Answer" field empty', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);
      const expectedResult = '';
  
      await calculatorPage.navigate();
      await calculatorPage.selectBuild(version);

      await calculatorPage.AssertAnswerValue(expectedResult);

      await calculatorPage.pressClear();
  
      await calculatorPage.AssertAnswerValue(expectedResult);
    });

    test('Integers only checkbox should be enabled', async ({ page }) => {
      let calculatorPage = new CalculatorPage(page);
      const expectedResult = '';
  
      await calculatorPage.navigate();
      await calculatorPage.selectBuild(version);
  
      await calculatorPage.AssertIntegersOnlyIsEnabled();
    });
  });
});