# Projeto de Testes Automatizados com Karate e Cypress

Este repositório contém dois projetos de testes automatizados: um utilizando o framework Karate e outro utilizando Cypress. Abaixo estão as instruções detalhadas de como configurar e executar cada um dos projetos.

## Karate

### Configuração Inicial

O projeto Karate foi inicializado utilizando Maven. Para criar o projeto, foi executado o seguinte comando:

```
mvn archetype:generate \
-DarchetypeGroupId=com.intuit.karate \
-DarchetypeArtifactId=karate-archetype \
-DarchetypeVersion=1.0.1 \
-DgroupId=prova.karate \
-DartifactId=prova_karate
```

### Token para a API GoRest
A API GoRest requer um token para que consiga realizar os testes. Para gerar o token basta ir no site `https://gorest.co.in/` e logar usando sua conta e gerar o token. Após isso, deve criar um arquivo json no seguinte caminho: `prova_karate/src/test/java/GoRestAPI/Token.json`. O json deve seguir o seguinte formato:
```
{
  "token": "Seu Token aqui"
}
```

Após isso, está configurado e pode rodar os testes normalmente.

### Executando os Testes
Para executar os testes no projeto Karate, utilize o seguinte comando:

```
mvn test -Dtest=GoRestRunner
```

### Relatórios

Após a execução dos testes, os relatórios podem ser encontrados no seguinte diretório:

```
/target/karate-reports/GoRestAPI.GoRest.html
```

Para visualizar o relatório, abra o arquivo HTML no seu navegador.

## Cypress

### Instalação do Cypress
O projeto Cypress foi inicializado com o seguinte comando:

```
npm install cypress
```

Para instalar o Mochawesome, que é usado para gerar relatórios, execute:

```
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
```

### Configuração Inicial
Após clonar o projeto, é necessário instalar as dependências do Cypress. Para isso, execute o seguinte comando na raiz do projeto:

```
npm install
```

### Executando os Testes
Para abrir a interface do Cypress e executar os testes manualmente, use:

```
./node_modules/.bin/cypress open
```

Para executar os testes via linha de comando (necessário para geração de relatórios), use:

```
npx cypress run
```

### Gerando Relatórios
Após a execução dos testes, gere um relatório em formato JSON com o seguinte comando:

```
npx mochawesome-merge "cypress/reports/*.json" > mochawesome.json
```

## Autores
Este projeto foi criado por Gabriel Almeida Dias e Vitor Oliveira Juliano de Almeida.