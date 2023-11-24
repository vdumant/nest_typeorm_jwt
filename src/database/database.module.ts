import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
// import { Client } from 'pg';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from './../config';

const API_KEY = '12345634';
const API_KEY_PROD = 'PROD1212121SA';

@Global()
@Module({
  imports: [
    // se hace en 'imports' porque TypeOrmModule es Un MODULO
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { user, host, dbName, password, port } = configService['postgres'];
        return {
          type: 'postgres',
          url: configService.postgresUrl,
          synchronize: false,
          autoLoadEntities: true,
          // ssl: {
          //   rejectUnauthorized: false,
          // },
        };
      },
    }),
  ],

  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
    // {
    // provide: 'PG',
    // useFactory: (configService: ConfigType<typeof config>) => {
    //   const client = new Client({
    //     connectionString: configService.postgresUrl,
    //     ssl: {
    //       rejectUnauthorized: false,
    //     },
    //   });
    //   client.connect();
    //   return client;
    // },
    // inject: [config.KEY],
    // },
  ],
  // exports: ['API_KEY', 'PG', TypeOrmModule],
  exports: ['API_KEY', TypeOrmModule],
})
export class DatabaseModule {}
