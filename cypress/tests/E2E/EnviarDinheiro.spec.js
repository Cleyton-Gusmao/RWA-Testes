import userData from '../../fixtures/userData.json'
import LoginPage from '../../support/pages/loginPage'
import HomePage from '../../support/pages/homePage'
import SignUpPage from '../../support/pages/signUpPage'

const loginPage = new LoginPage()
const homePage = new HomePage()
const signUpPage = new SignUpPage()

describe('Enviar dinheiro', () => {
    it('Enviando dinheiro com saldo disponível', () => {
        const usuario = signUpPage.registerRandomUser() // Cria uma nova conta com usuário random

        loginPage.loginUserSuccess(
            usuario.userName,
            usuario.password
        ) // Acessa a página de login, verifica a página e realiza login com o usuário random criado

        homePage.createBank(
            userData.bankInfos.bankName,
            userData.bankInfos.routingNumber,
            userData.bankInfos.accountNumber
        ) // Cria um novo banco. Depois automatizar para random tbm

        homePage.transferValueSucess(
            userData.paymentInfos.amount,
            userData.paymentInfos.note
        ) // Realiza a tranferência

    })


    it('Enviando dinheiro com saldo indisponível', () => {
        const usuario = signUpPage.registerRandomUser() // Cria uma nova conta com usuário random e adiciona a constante usuario

        loginPage.loginUserSuccess(
            usuario.userName,
            usuario.password
        ) // Acessa a página de login, verifica a página e realiza login com o usuário random criado

        homePage.createBank(
            userData.bankInfos.bankName,
            userData.bankInfos.routingNumber,
            userData.bankInfos.accountNumber
        ) // Cria um novo banco. Depois automatizar para random tbm

        homePage.transferValueUnsuccessful(
            userData.paymentInfos.amount,
            userData.paymentInfos.note
        ) // Realiza a tranferência
    })
})