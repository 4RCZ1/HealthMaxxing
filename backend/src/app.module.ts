import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    UserModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'aws-0-eu-central-1.pooler.supabase.com',
      port: 6543,
      username: 'postgres.zybzyhojzuleyegyghks',
      password: '',
      database: 'postgres',
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
