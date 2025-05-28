
# Testes Automatizados do Real World App (RWA) com Cypress

Este repositório contém os testes automatizados desenvolvidos para o Real World App (RWA), um aplicativo criado pela equipe do Cypress para demonstrar métodos, padrões e fluxos reais de testes com Cypress.

---

## Sobre o Real World App (RWA)

O RWA é uma espécie de clone do Venmo, que permite criar conta, adicionar conta bancária e enviar/receber dinheiro entre amigos. Este projeto serve como plataforma de aprendizado para explorar e praticar testes em cenários reais de desenvolvimento de software.

Repositório original do RWA:  
https://github.com/cypress-io/cypress-realworld-app

---

## Exercícios e Casos de Teste Criados

### 1. Login e Registro de Usuário

- **Login com sucesso:** Verificar se um usuário válido consegue fazer login.
- **Login com credenciais inválidas:** Validar que o sistema exibe mensagem de erro com dados incorretos.
- **Registro com sucesso:** Verificar cadastro de novo usuário com dados válidos.
- **Registro com dados incompletos:** Garantir mensagens de erro para cadastro incompleto.

### 2. Enviar Dinheiro

- **Saldo suficiente:** Validar envio de dinheiro com saldo disponível.
- **Saldo insuficiente:** Garantir mensagem de erro se saldo não for suficiente.

### 3. Automação do Histórico de Transações

- Visualizar histórico de transações com transferência realizada.
- Visualizar histórico de transações sem transferência realizada.

---

## Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) — Framework de testes end-to-end para aplicações web.
- [Mocha](https://mochajs.org/) + [Chai](https://www.chaijs.com/) — Biblioteca de estrutura e asserções para os testes.

---

## Como rodar os testes

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute os testes:

   ```bash
   npx cypress open
   ```

   ou para rodar no terminal:

   ```bash
   npx cypress run
   ```

---

## Estrutura do projeto

- `cypress/e2e/` — Contém os testes automatizados criados.
- Pastas `cypress/tests/api`, `cypress/tests/demo`, `cypress/tests/ui` e `cypress/tests/ui-auth-providers` foram **ignoradas** para não enviar os testes originais que vieram com o projeto.

---

## Contato

Cleyton Gusmão  
cleytongusmao18@gmail.com
[LinkedIn](https://www.linkedin.com/in/cleytong-qa/)  

---

Obrigado por visitar este repositório!
