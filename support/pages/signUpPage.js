import { gerarUsuarioFaker } from '../utils/gerarUsuario'

class SignUpPage {
    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            confirmPasswordField: "[name='confirmPassword']",
            signUpButtonField: "[type='submit']"
        }
        return selectors

    }

    registerUserSuccess(firstName, lastName, userName, password, confirmPassword) {
        cy.visit('http://localhost:3000/signup')
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().usernameField).type(userName)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(confirmPassword)
        cy.get(this.selectorsList().signUpButtonField).click()
        cy.location('pathname').should('equal', '/signin')
    }

    registerUserUnsuccessful(firstName, lastName, userName, password) {
        cy.visit('http://localhost:3000/signup')
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().usernameField).type(userName)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().signUpButtonField).should('be.disabled')
        cy.location('pathname').should('equal', '/signup')
    }

    registerRandomUser() {
        const user = gerarUsuarioFaker()
        this.registerUserSuccess(
            user.firstName,
            user.lastName,
            user.userName,
            user.password,
            user.confirmPassword
        )

        return user
    }

    registerRadomUserUnsuccessful() {
        const user = gerarUsuarioFaker()
        this.registerUserUnsuccessful(
            user.firstName,
            user.lastName,
            user.userName,
            user.password
        )

        return user
    }
}

export default SignUpPage