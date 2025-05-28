# Real World App - Testes Automatizados (Portfólio)

## Sobre o Projeto

Este repositório contém meus testes automatizados usando Cypress para o **Real World App (RWA)**, um app de exemplo criado pela equipe do Cypress para praticar testes em cenários reais. Os testes aqui foram desenvolvidos como parte do curso **Guardião da Qualidade**.

Repo do RWA: https://github.com/cypress-io/cypress-realworld-app


## Objetivo

O objetivo deste projeto é demonstrar a criação e automação de casos de teste para funcionalidades importantes do RWA, como:

- Login e Registro de Usuário  
- Envio de Dinheiro  
- Visualização do Histórico de Transações  

## Estrutura do Projeto

Para manter o foco nos meus testes e facilitar o entendimento, incluí apenas as pastas essenciais para execução e organização dos testes:

- `fixtures/` — Dados de exemplo usados nos testes.  
- `support/pages/` — Organização dos elementos e ações do app para deixar os testes mais limpos (padrão Page Object).  
- `support/utils/` — Funções auxiliares para simplificar lógicas repetidas nos testes.  
- `tests/E2E/` — Meus testes end-to-end para as funcionalidades citadas.

**Nota:** Removi outras pastas e testes originais do RWA que não foram usados neste portfólio.

## Como rodar os testes  

**Pré-requisito:** você precisa clonar o projeto original do RWA, pois os testes dependem da estrutura e da aplicação original.  

1. **Clone o projeto oficial do RWA e siga:**

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

4. **Instale as dependências:**

```bash
npm install
```

5. **Execute os testes:**

```bash
npx cypress open
```

Ou

```bash
npx cypress run
```
