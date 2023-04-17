# <p align = "center"> Projeto DrivenPass</p>

<p align="center">
   <img height="150px" src="https://cdn.pixabay.com/photo/2020/06/30/10/23/icon-5355895_1280.png"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Carlos Albuqueque-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/carlos-allbuquerque/projeto19-drivenpass?color=4dae71&style=flat-square" />
</p>

##  📋 <b>Descrição</b>

O DrivenPass é um projeto de desenvolvimento de uma API back-end que visa facilitar a vida dos usuários na gestão de suas senhas. Com o DrivenPass, os usuários não precisam mais memorizar várias senhas diferentes para diferentes sites ou aplicativos. Em vez disso, eles podem armazenar suas senhas em um único local seguro e acessá-las com apenas uma senha mestra.

***

## 💻 <b>Tecnologias e Conceitos</b>

- REST API
- JWTs & refresh tokens
- Node.js
- TypeScript
- PostgreSQL com ORM Prisma

***

## 🚀 <b>Rotas</b>

### <b>Rotas de autenticação</b>

```yml
POST /signup
    - Rota para cadastrar um novo usuário
    - headers: {}
    - body: {
        "email": "lorem@gmail.com",
        "password": "loremipsum"
    }
```
    
```yml 
POST /signin
    - Rota para fazer login
    - headers: {}
    - body: {
        "email": "lorem@gmail.com",
        "password": "loremipsum"
    }
```

### <b>Rotas de credenciais</b>

```yml 
POST /credentials (autenticada)
    - Rota para criar nova credencial
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "title": "lorem ipsum",
        "url": "https://lorem.ipsum.com",
        "username": "lorem",
        "password": "loremipsum"
    }
```

```yml
GET /credentials (autenticada)
    - Rota para listar as credenciais de um usuário
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
GET /credentials/:id (autenticada)
    - Rota para pegar uma credencial do usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
 
```yml
DELETE /credentials/:id (autenticada)
    - Rota para deletar uma credencial do usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
***

### <b>Rotas de notas seguras</b>

```yml 
POST /safenotes (autenticada)
    - Rota para criar nova nota segura
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "title": "lorem ipsum",
        "note": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Sed iaculis mauris a lectus euismod interdum. Interdum et
             malesuada fames ac ante ipsum primis in faucibus."
    }
```

```yml
GET /safenotes (autenticada)
    - Rota para listar as notas seguras de um usuário
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
GET /safenotes/:id (autenticada)
    - Rota para pegar uma nota segura do usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
 
```yml
DELETE /safenotes/:id (autenticada)
    - Rota para deletar uma nota segura do usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
***

### <b>Rotas de cartões</b>

```yml 
POST /cards (autenticada)
    - Rota para criar novo cartão
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "title": "lorem ipsum dolor",
        "number": "0000 0000 0000 0000",
        "cardHolderName": "LOREM I DOLOR",
        "expirationDate": "MM/YY",
        "password": "LOREM",
        "isVirtual": true | false,
        "type": "CREDIT" | "DEBIT" | "HIBRID"
    }
```

```yml
GET /cards (autenticada)
    - Rota para listar os cartões de um usuário
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
GET /cards/:id (autenticada)
    - Rota para pegar um cartão do usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
 
```yml
DELETE /cards/:id (autenticada)
    - Rota para deletar um cartão do usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

### <b>Rotas de documentos</b>

```yml 
POST /documents (autenticada)
    - Rota para criar novo documento
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "fullName": "lorem ipsum dolor",
        "issueDate": "DD/MM/YYYY",
        "cardHolderName": "LOREM I DOLOR",
        "expirationDate": "DD/MM/YYYY",
        "registrationNumber": "000.000.00",
        "issuingBody": "República Federativa do Brasil",
        "type": "CREDIT" | "DEBIT" | "HIBRID"
    }
```

```yml
GET /documents (autenticada)
    - Rota para listar os documentos de um usuário
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
GET /documents/:id (autenticada)
    - Rota para pegar um documento do usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
 
```yml
DELETE /documents/:id (autenticada)
    - Rota para deletar um documento do usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
