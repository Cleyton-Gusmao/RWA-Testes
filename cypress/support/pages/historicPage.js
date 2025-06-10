class HistoricPage {
    selectorsList() {
        const selectors = {
            buttonMenu: "[data-test='sidenav-home']",
            optionMine: "[data-test='nav-personal-tab']",
            lastTransation: ".MuiListItem-alignItemsFlexStart",
            msgNoTransaction: "[data-test='empty-list-header']",
            ButtonNewTransaction: "[data-test='transaction-list-empty-create-transaction-button']"
        }
        return selectors
    }

    accessMineHistory() {
        cy.get(this.selectorsList().buttonMenu).click()
        cy.get(this.selectorsList().optionMine).click()
        cy.get(this.selectorsList().lastTransation).should('exist')
    }

    accessMineNoHistory() {
        cy.get(this.selectorsList().optionMine).click()
        cy.get(this.selectorsList().msgNoTransaction)
        cy.get(this.selectorsList().ButtonNewTransaction)
    }
}

export default HistoricPage