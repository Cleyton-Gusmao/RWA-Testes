# Real World App - Testes Automatizados com Cypress (Portfólio)

## Sobre o Projeto

Este repositório contém meus testes automatizados usando Cypress para o [Repositório oficial do RWA](https://github.com/cypress-io/cypress-realworld-app), um app de exemplo criado pela equipe do Cypress para praticar testes em cenários reais.

## Objetivo

Este projeto demonstra a criação e automação de casos de teste para funcionalidades chave do RWA, incluindo:

- Login e Registro de Usuário  
- Envio de Dinheiro  
- Visualização do Histórico de Transações  

## Estrutura do Projeto

Para manter o foco nos meus testes e facilitar o entendimento, incluí apenas as pastas essenciais para execução e organização dos testes:

- `fixtures/` — Dados de exemplo usados nos testes.  
- `support/pages/` — Organização dos elementos e ações do app para deixar os testes mais limpos (padrão Page Object).  
- `support/utils/` — Funções auxiliares para simplificar lógicas repetidas nos testes.  
- `tests/E2E/` — Meus testes end-to-end para as funcionalidades citadas.

> *Foram removidas pastas e testes originais do RWA que não são utilizados neste projeto.*

## Como rodar os testes

**Pré-requisito:**  
 Este repositório contém apenas os testes automatizados. Para executar os testes, é necessário clonar o repositório oficial do Real World App (RWA) e seguir os passos para instalação e configuração da aplicação. Em seguida, copie as pastas deste repositório para o diretório `cypress/` do projeto RWA.

1. Clone o projeto oficial do RWA:
```bash
git clone https://github.com/cypress-io/cypress-realworld-app
```

2. **Siga as instruções do README do projeto:**

Dentro da pasta do projeto, você encontrará um arquivo README.md com todas as orientações para instalar, configurar e rodar a aplicação localmente.

3. **Clone este repositório:**

```bash
git clone https://github.com/Cleyton-Gusmao/RWA-Testes.git
```
4. **Copie as pastas do meu repositório para dentro da pasta cypress do projeto oficial:**

As pastas que disponibilizei são:  

- `fixtures/` — Dados de exemplo usados nos testes.  
- `support/pages/` — Organização dos elementos e ações do app para deixar os testes mais limpos (padrão Page Object).  
- `support/utils/` — Funções auxiliares para simplificar lógicas repetidas nos testes.  
- `tests/E2E/` — Meus testes end-to-end para as funcionalidades citadas.

Para adicionar, copie essas pastas e cole dentro da pasta cypress do projeto clonado, respeitando essa estrutura:  

```
cypress/  
├── fixtures/  
├── support/  
│   ├── auth-provider-commands  
│   ├── pages/  
│   └── utils/  
└── tests/
    └── E2E/  
```

5. **Navegue até o diretório do projeto**
```bash
cd cypress-realworld-app
```
   
6. **Instale as dependências:**

```bash
yarn install
```

7. **Execute os testes:**

```bash
npx cypress open
```
