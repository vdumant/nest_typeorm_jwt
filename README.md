
## Autenticacion
- npm run migrations:run
- Guardianes:
  - Crear modulo autenticacion: nest g mo auth
  - Crear guardian: nest g gu auth/guards/apiKey --flat
- Hashing de Contraseña:
  - npm i bcrypt
  - npm i @types/bcrypt -D
- Autenticacion con Passport:
  - npm install --save @nestjs/passport passport passport-local
  - npm install --save-dev @types/passport-local
  - nest g s auth/services/auth --flat
  - nest g co auth/controllers/auth --flat
- Autenticacion con JWT:
  - npm i --save @nestjs/jwt passport-jwt
  - npm i --save-dev @types/passport-jwt
## Typeorm
- Driver Postgres node: npm i pg && npm i @types/pg -D
- TypeOrm: npm i --save @nestjs/typeorm typeorm
- Mysql: npm i mysql2 --save
- Sqlite: npm i sqlite3 --save
- Crear Servicio: nest g s users/services/orders --flat
- Crear Controller: nest g co users/controllers/orders --flat
- Cambiar base de datos(sqlite,postgres,mysql) en:
  - src\database\database.module.ts
  - Para migraciones: src\database\data-source.ts
- Convertir Params Query Forma Explicita en src/main.ts:
```ts
      transformOptions: {
        enableImplicitConversion: true,
      },
```
- Serializar columnas response Api, en src/main.ts agregar:
```ts
      ClassSerializerInterceptor } from '@nestjs/common';
```

## Migrations
npm run migrations:generate src/database/migrations/<YOUR_MIGRATION_NAME>
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
