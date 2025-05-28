import SignUpPage from '../../support/pages/signUpPage'
import LoginPage from '../../support/pages/loginPage'

const singUpPage = new SignUpPage()
const loginPage = new LoginPage()

let userSuccess // Variáveis que vão receber o usuário random dentro do teste
let userUnsuccessful

describe('Cadastro de novo usuário', () => {
  it('Cadastro de novo usuário com informações válidas', () => {
    userSuccess = singUpPage.registerRandomUser() // Cria um novo usuário válido na variável userSucess
  })
})


describe('Cadastro de usuário com informações incompletas', () => {
  it('Regristro de um novo usuário sem preencher todas as informações obrigatórias', () => {
    userUnsuccessful = singUpPage.registerRadomUserUnsuccessful() // Cria um novo usuário inválido na variável userUnsuccessful
  })
})


describe('Login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    loginPage.loginUserUnsuccessful(
      userUnsuccessful.userName,
      userUnsuccessful.password
    ) // Realiza o login com usuário e senha inválidos
  })
})


describe('Login com credenciais válidas', () => {
  it('Login com sucesso', () => {
    loginPage.loginUserSuccess(
      userSuccess.userName,
      userSuccess.password
    ) // Realiza o login com usuário e senha válidos
  })
})