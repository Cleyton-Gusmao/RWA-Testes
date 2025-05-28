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

1. **Clone este repositório:**

```bash
git clone https://github.com/Cleyton-Gusmao/RWA-Testes.git
```

2. **Entre na pasta do projeto:**

```bash
cd RWA-Testes
```

3. **Instale as dependências:**

```bash
npm install
```

4. **Execute os testes no modo headless:**

```bash
npx cypress run
```

Ou abra o Cypress com interface gráfica para rodar manualmente:

```bash
npx cypress open
```
