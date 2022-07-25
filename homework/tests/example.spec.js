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
      // Arrange test data
      let calculatorPage = new CalculatorPage(page);
      const operator1 = '1';
      const operator2 = '5';
      const expectedResult = '6';
  
      // Enter calculator page
      await calculatorPage.navigate();
  
      // Select build version
      await calculatorPage.selectBuild(version);
  
      // Type in operators for calculation
      await calculatorPage.inputOperators(operator1, operator2);
  
      // Select operation dropdown option
      await calculatorPage.selectOperationDropdown('Add');
  
      // Press the calculate button
      await calculatorPage.pressCalculate();
  
      // Assert results
      await expect(page.locator('#numberAnswerField')).toHaveValue(expectedResult);
    });
  
    test('Adding 1 to 5.1 should result in 6 when "Integers only" is checked', async ({ page }) => {
      // Arrange test data
      let calculatorPage = new CalculatorPage(page);
      const operator1 = '5.1';
      const operator2 = '1';
      const expectedResult = '6';
  
      // Enter calculator page
      await calculatorPage.navigate();
  
      // Select build version
      await calculatorPage.selectBuild(version);
  
      // Type in operators for calculation
      await calculatorPage.inputOperators(operator1, operator2);
  
      // Select operation dropdown option
      await calculatorPage.selectOperationDropdown('Add');
  
      // Ccheck "Integers only" check box.
      await calculatorPage.checkIntegersOnly();
  
      // Press the calculate button
      await calculatorPage.pressCalculate();
  
      // Assert results
      await expect(page.locator('#numberAnswerField')).toHaveValue(expectedResult);
    });
  
    test('Adding a to b should result in an error message', async ({ page }) => {
      // Arrange test data
      let calculatorPage = new CalculatorPage(page);
      const operator1 = 'a';
      const operator2 = 'b';
  
      // Enter calculator page
      await calculatorPage.navigate();
  
      // Select build version
      await calculatorPage.selectBuild(version);
  
      // Type in operators for calculation
      await calculatorPage.inputOperators(operator1, operator2);
  
      // Select operation dropdown option
      await calculatorPage.selectOperationDropdown('Add');
  
      // Ccheck "Integers only" check box.
      await calculatorPage.checkIntegersOnly();
  
      // Press the calculate button
      await calculatorPage.pressCalculate();
  
      // Assert results
      await expect(page.locator('#errorMsgField')).not.toBeEmpty();
    });
  });
  
  test.describe(version + ': Subtract', () => {
    test('Subtracting 1 from 5 should result in 4', async ({ page }) => {
      // Arrange test data
      let calculatorPage = new CalculatorPage(page);
      const operator1 = '5';
      const operator2 = '1';
      const expectedResult = '4';
  
      // Enter calculator page
      await calculatorPage.navigate();
  
      // Select build version
      await calculatorPage.selectBuild(version);
  
      // Type in operators for calculation
      await calculatorPage.inputOperators(operator1, operator2);
  
      // Select operation dropdown option
      await calculatorPage.selectOperationDropdown('Subtract');
  
      // Press the calculate button
      await calculatorPage.pressCalculate();
  
      // Assert results
      await expect(page.locator('#numberAnswerField')).toHaveValue(expectedResult);
    });
  
    test('Subtracting 1 from 5.1 should result in 4 when "Integers only" is checked', async ({ page }) => {
      // Arrange test data
      let calculatorPage = new CalculatorPage(page);
      const operator1 = '5.1';
      const operator2 = '1';
      const expectedResult = '4';
  
      // Enter calculator page
      await calculatorPage.navigate();
  
      // Select build version
      await calculatorPage.selectBuild(version);
  
      // Type in operators for calculation
      await calculatorPage.inputOperators(operator1, operator2);
  
      // Select operation dropdown option
      await calculatorPage.selectOperationDropdown('Subtract');
  
      // Ccheck "Integers only" check box.
      await calculatorPage.checkIntegersOnly();
  
      // Press the calculate button
      await calculatorPage.pressCalculate();
  
      // Assert results
      await expect(page.locator('#numberAnswerField')).toHaveValue(expectedResult);
    });
  
    test('Subtracting a from b should result in an error message', async ({ page }) => {
      // Arrange test data
      let calculatorPage = new CalculatorPage(page);
      const operator1 = 'a';
      const operator2 = 'b';
  
      // Enter calculator page
      await calculatorPage.navigate();
  
      // Select build version
      await calculatorPage.selectBuild(version);
  
      // Type in operators for calculation
      await calculatorPage.inputOperators(operator1, operator2);
  
      // Select operation dropdown option
      await calculatorPage.selectOperationDropdown('Subtract');
  
      // Press the calculate button
      await calculatorPage.pressCalculate();
  
      // Assert results
      await expect(page.locator('#errorMsgField')).not.toBeEmpty();
    });
  });
  
  test.describe(version + ': Concatenate', () => {
    test('Concatenating 2 and 3 results in 23', async ({ page }) => {
      // Arrange test data
      let calculatorPage = new CalculatorPage(page);
      const operator1 = '2';
      const operator2 = '3';
      const expectedResult = '23';
  
      // Enter calculator page
      await calculatorPage.navigate();
  
      // Select build version
      await calculatorPage.selectBuild(version);
  
      // Type in operators for calculation
      await calculatorPage.inputOperators(operator1, operator2);
  
      // Select operation dropdown option
      await calculatorPage.selectOperationDropdown('Concatenate');
  
      // Press the calculate button
      await calculatorPage.pressCalculate();
  
      // Assert results
      await expect(page.locator('#numberAnswerField')).toHaveValue(expectedResult);
    });
  
    test('Concatenating -2 and -3 results in -2-3', async ({ page }) => {
      // Arrange test data
      let calculatorPage = new CalculatorPage(page);
      const operator1 = '-2';
      const operator2 = '-3';
      const expectedResult = '-2-3';
  
      // Enter calculator page
      await calculatorPage.navigate();
  
      // Select build version
      await calculatorPage.selectBuild(version);
  
      // Type in operators for calculation
      await calculatorPage.inputOperators(operator1, operator2);
  
      // Select operation dropdown option
      await calculatorPage.selectOperationDropdown('Concatenate');
  
      // Press the calculate button
      await calculatorPage.pressCalculate();
  
      // Assert results
      await expect(page.locator('#numberAnswerField')).toHaveValue(expectedResult);
    });
  
    test('Concatenating 5.1 and -8.6 results in 5.1-8.6', async ({ page }) => {
      // Arrange test data
      let calculatorPage = new CalculatorPage(page);
      const operator1 = '5.1';
      const operator2 = '-8.6';
      const expectedResult = '5.1-8.6';
  
      // Enter calculator page
      await calculatorPage.navigate();
  
      // Select build version
      await calculatorPage.selectBuild(version);
  
      // Type in operators for calculation
      await calculatorPage.inputOperators(operator1, operator2);
  
      // Select operation dropdown option
      await calculatorPage.selectOperationDropdown('Concatenate');
  
      // Press the calculate button
      await calculatorPage.pressCalculate();
  
      // Assert results
      await expect(page.locator('#numberAnswerField')).toHaveValue(expectedResult);
    });
  
    test('Concatenating a and b results in ab', async ({ page }) => {
      // Arrange test data
      let calculatorPage = new CalculatorPage(page);
      const operator1 = 'a';
      const operator2 = 'b';
      const expectedResult = 'ab';
  
      // Enter calculator page
      await calculatorPage.navigate();
  
      // Select build version
      await calculatorPage.selectBuild(version);
  
      // Type in operators for calculation
      await calculatorPage.inputOperators(operator1, operator2);
  
      // Select operation dropdown option
      await calculatorPage.selectOperationDropdown('Concatenate');
  
      // Press the calculate button
      await calculatorPage.pressCalculate();
  
      // Assert results
      await expect(page.locator('#numberAnswerField')).toHaveValue(expectedResult);
    });
  });
  
  test.describe(version + ': Divide', () => {
    test('Dividing 60 by 3 should result in 20', async ({ page }) => {
      // Arrange test data
      let calculatorPage = new CalculatorPage(page);
      const operator1 = '60';
      const operator2 = '3';
      const expectedResult = '20';
  
      // Enter calculator page
      await calculatorPage.navigate();
  
      // Select build version
      await calculatorPage.selectBuild(version);
  
      // Type in operators for calculation
      await calculatorPage.inputOperators(operator1, operator2);
  
      // Select operation dropdown option
      await calculatorPage.selectOperationDropdown('Divide');
  
      // Press the calculate button
      await calculatorPage.pressCalculate();
  
      // Assert results
      await expect(page.locator('#numberAnswerField')).toHaveValue(expectedResult);
    });
  
    test('Dividing 60 by 11 should result in 5 when "Integers only" is checked', async ({ page }) => {
      // Arrange test data
      let calculatorPage = new CalculatorPage(page);
      const operator1 = '60';
      const operator2 = '11';
      const expectedResult = '5';
  
      // Enter calculator page
      await calculatorPage.navigate();
  
      // Select build version
      await calculatorPage.selectBuild(version);
  
      // Type in operators for calculation
      await calculatorPage.inputOperators(operator1, operator2);
  
      // Select operation dropdown option
      await calculatorPage.selectOperationDropdown('Divide');
  
      // Ccheck "Integers only" check box.
      await calculatorPage.checkIntegersOnly();
  
      // Press the calculate button
      await calculatorPage.pressCalculate();
  
      // Assert results
      await expect(page.locator('#numberAnswerField')).toHaveValue(expectedResult);
    });
  
    test('Dividing a by b should result in an error message', async ({ page }) => {
      // Arrange test data
      let calculatorPage = new CalculatorPage(page);
      const operator1 = 'a';
      const operator2 = 'b';
  
      // Enter calculator page
      await calculatorPage.navigate();
  
      // Select build version
      await calculatorPage.selectBuild(version);
  
      // Type in operators for calculation
      await calculatorPage.inputOperators(operator1, operator2);
  
      // Select operation dropdown option
      await calculatorPage.selectOperationDropdown('Divide');
  
      // Press the calculate button
      await calculatorPage.pressCalculate();
  
      // Assert results
      await expect(page.locator('#errorMsgField')).not.toBeEmpty();
    });
  });
  
  test.describe(version + ': Other', () => {
    test('Pressing the clear button when "Answer" field is not empty should make the "Answer" field empty', async ({ page }) => {
      // Arrange test data
      let calculatorPage = new CalculatorPage(page);
      const operator1 = '1';
      const operator2 = '1';
      const expectedResult = '';
  
      // Enter calculator page
      await calculatorPage.navigate();
  
      // Select build version
      await calculatorPage.selectBuild(version);
  
      // Type in operators for calculation
      await calculatorPage.inputOperators(operator1, operator2);
  
      // Select operation dropdown option
      await calculatorPage.selectOperationDropdown('Add');
  
      // Press the calculate button
      await calculatorPage.pressCalculate();
  
      // Press the clear button
      await calculatorPage.pressClear();
  
      // Assert results
      await expect(page.locator('#numberAnswerField')).toHaveValue(expectedResult);
    });
  
    test('Pressing the clear button when "Answer" field is empty should keep the "Answer" field empty', async ({ page }) => {
      // Arrange test data
      let calculatorPage = new CalculatorPage(page);
      const expectedResult = '';
  
      // Enter calculator page
      await calculatorPage.navigate();

      // Select build version
      await calculatorPage.selectBuild(version);
  
      // Press the clear button
      await calculatorPage.pressClear();
  
      // Assert results
      await expect(page.locator('#numberAnswerField')).toHaveValue(expectedResult);
    });
  });
});