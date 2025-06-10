class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            signInButtonField: "[type='submit']",
            singUpButton: "[data-test='signup']",
            msgError: "[data-test='signin-error']"
        }
        return selectors

    }

    loginUserSuccess(userName, password) {
        cy.visit('http://localhost:3000/signin')
        cy.get(this.selectorsList().usernameField).type(userName)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().signInButtonField).click()
    }

    loginUserUnsuccessful(userName, password) {
        cy.visit('http://localhost:3000/signin')
        cy.get(this.selectorsList().usernameField).type(userName)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().signInButtonField).click()
        cy.get(this.selectorsList().msgError)
    }
}

export default LoginPage