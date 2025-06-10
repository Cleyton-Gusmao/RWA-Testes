import userData from '../../fixtures/userData.json'
import LoginPage from '../../support/pages/loginPage'
import HistoricPage from '../../support/pages/historicPage'
import HomePage from '../../support/pages/homePage'
import SignUpPage from '../../support/pages/signUpPage'

const loginPage = new LoginPage()
const historicPage = new HistoricPage()
const homePage = new HomePage()
const signUpPage = new SignUpPage()


describe('Verificar histórico de transações', () => {
    it('Verifica o histórico com transações realizadas anteriormente', () => {
        const usuario = signUpPage.registerRandomUser()
        loginPage.loginUserSuccess(
            usuario.userName,
            usuario.password
        )

        homePage.createBank(
            userData.bankInfos.bankName,
            userData.bankInfos.routingNumber,
            userData.bankInfos.accountNumber
        )

        homePage.transferValueSucess(
            userData.paymentInfos.amount,
            userData.paymentInfos.note
        )

        historicPage.accessMineHistory()
    })

    it('Verifica o histórico sem transações realizadas anteriormente', () => {
        const usuario = signUpPage.registerRandomUser()
        loginPage.loginUserSuccess(
            usuario.userName,
            usuario.password
        )

        homePage.createBank(
            userData.bankInfos.bankName,
            userData.bankInfos.routingNumber,
            userData.bankInfos.accountNumber
        )
        
        historicPage.accessMineNoHistory()
    })
})