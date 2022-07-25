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

    async inputOperators(op1, op2) {
        await this.page.locator('#number1Field').type(op1);
        await this.page.locator('#number2Field').type(op2);
    }

    async selectOperationDropdown(op) {
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
}

module.exports = { CalculatorPage };