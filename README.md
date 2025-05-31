[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup instructions

```bash
$ npm install
```

## Compile and run the project

run these three commands in vs code terminal

```bash
npm install class-validator class-transformer
npm install -g @nestjs/cli
npm install @nestjs/common @nestjs/core rxjs reflect-metadata

```

## running

```bash
$ npm run start:dev
```

now we can use postman to run the api, and test the features

## Project Overview:

This is a RESTful Notes API built using NestJS, a progressive Node.js framework. It allows users to create, read, update, and delete notes with title and description fields. The API uses DTOs and class-validator for robust input validation to ensure data integrity.



## Technology Stack:

- nestjs
- git
- postman
- nodejs

## Features:

Key features include:

CRUD endpoints for notes (/notes)

Strong input validation and automatic request transformation

Modular and scalable NestJS structure

## Challenges and Solutions:

#### learning a new and unfamiliar framework
- resolved by hardwork and perserverance

#### handeling optional fields anf type safety
- resolved by implementing dto

#### data loss on restarting server:
- resolved by using dataintegration through postgreSQL

## Future Enhancements:

- a properly designed frontend
- option to add images
- google authentication for increased privacy and security
- search bars and filtering







