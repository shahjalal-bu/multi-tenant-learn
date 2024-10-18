import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TenantModule } from './tenant/tenant.module';
import { BookModule } from './book/book.module';
import { Tenant } from './tenant/tenant.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.host,
      port: 3306,
      username: process.env.username,
      password: process.env.password,
      database: 'test_multi_tenant',
      entities: [Tenant],
      synchronize: true,
    }),
    TenantModule,
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}