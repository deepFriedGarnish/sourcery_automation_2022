const { expect } = require('@playwright/test');

class CalculatorPage {
    constructor(page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://testsheepnz.github.io/BasicCalculator');
    }

    async selectBuild(label) {
        await this.page.selectOption('#selectBuild', { label: label});
    }

    async inputValues(value1, value2) {
        await this.page.locator('#number1Field').type(value1);
        await this.page.locator('#number2Field').type(value2);
    }

    async selectOperation(op) {
        await this.page.selectOption('#selectOperationDropdown', {label: op});
    }

    async pressCalculate() {
        await this.page.locator('#calculateButton').click();
    }

    async checkIntegersOnly() {
        await this.page.locator('#integerSelect').check();
    }

    async pressClear() {
        await this.page.locator('#clearButton').click();
    }

    async AssertAnswerValue(expectedValue) {
        await expect(this.page.locator('#numberAnswerField')).toHaveValue(expectedValue);
    }

    async AssertErrorMessageText(expectedText){
        await expect(this.page.locator('#errorMsgField')).toContainText(expectedText);
        await expect(this.page.locator('#errorMsgField')).not.toBeEmpty();
    }

    async AssertIntegersOnlyIsEnabled() {
        await expect(this.page.locator('#integerSelect')).toBeEnabled();
    }
}

module.exports = { CalculatorPage };