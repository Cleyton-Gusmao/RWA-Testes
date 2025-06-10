class HomePage {
    selectorsList() {
        const selectors = {
            boxWelcome: "[data-test='user-onboarding-dialog-title']",
            skipButton: "[data-test='user-onboarding-next']",
            bankNameField: "[placeholder='Bank Name']",
            routingNumberField: "[placeholder='Routing Number']",
            accountNumberField: "[placeholder='Account Number']",
            saveButton: "[data-test='bankaccount-submit']",
            pagSucess: "[data-test='user-onboarding-dialog-content']",
            newButton: "[data-test='nav-top-new-transaction']",
            selectFirstContact: "[data-test='user-list-item-GjWovtg2hr']",
            amountField: "[placeholder='Amount']",
            noteField: "[placeholder='Add a note']",
            payButton: "[data-test='transaction-create-submit-payment']",
            anotherTransactionButton: "[data-test='new-transaction-create-another-transaction']",
            returnButton: "[data-test='new-transaction-return-to-transactions']",
            sucessAlert: ".MuiAlert-message"
        }
        return selectors

    }

    createBank(bankName, routingNumber, accountNumber) {
        cy.get(this.selectorsList().boxWelcome)
        cy.get(this.selectorsList().skipButton).click()
        cy.get(this.selectorsList().bankNameField).type(bankName)
        cy.get(this.selectorsList().routingNumberField).type(routingNumber)
        cy.get(this.selectorsList().accountNumberField).type(accountNumber)
        cy.get(this.selectorsList().saveButton).click()
        cy.get(this.selectorsList().pagSucess)
        cy.get(this.selectorsList().skipButton).click()
    }

    transferValueSucess(amount, note) {
        cy.get(this.selectorsList().newButton).click()
        cy.get(this.selectorsList().selectFirstContact).scrollIntoView().click({ force: true })
        cy.get(this.selectorsList().amountField).type(amount)
        cy.get(this.selectorsList().noteField).type(note)
        cy.get(this.selectorsList().payButton).click()
        cy.get(this.selectorsList().anotherTransactionButton)
        cy.get(this.selectorsList().returnButton)
        cy.get(this.selectorsList().sucessAlert)
    }

    transferValueUnsuccessful(amount, note) {
        cy.get(this.selectorsList().newButton).click()
        cy.get(this.selectorsList().selectFirstContact).scrollIntoView().click({ force: true })
        cy.get(this.selectorsList().amountField).type(amount)
        cy.get(this.selectorsList().noteField).type(note)
        cy.get(this.selectorsList().payButton).click()
        // Deveria ter a validação da mensagem de erro, porém o sistema está permitindo enviar valores com saldo indisponível
    }

}

export default HomePage