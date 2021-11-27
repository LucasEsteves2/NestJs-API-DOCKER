import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AlunoController } from './aluno.controller'

@Module({
  imports: [],
  controllers: [AppController, AlunoController ],
  providers: [AppService],
})
export class AppModule {}
