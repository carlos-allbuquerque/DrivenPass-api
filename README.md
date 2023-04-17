# <p align = "center">DrivenPass API</p>

<p align="center">
   <img height="150px" src="https://cdn.pixabay.com/photo/2020/06/30/10/23/icon-5355895_1280.png"/>
</p>

##  📋 <b>Descrição</b>

O DrivenPass é o 19º projeto do bootcamp Full Stack da Driven Education. O projeto se trata do desenvolvimento de uma API de gerenciamento de senhas, cartões e informações sensíveis.

***

## ☁️ <b>Deploy</b>
Url base do deploy do projeto no Heroku, por onde pode-se utilizar as rotas da API:<br> https://carlosalbuquerque-drivenpass.herokuapp.com/



***

## 💻 <b>Tecnologias</b>

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JWT](https://img.shields.io/badge/JWT-gray?style=for-the-badge&logo=JSON%20web%20tokens)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)

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
