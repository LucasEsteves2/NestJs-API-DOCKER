import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AlunoController } from './controller/aluno.controller'

@Module({
  imports: [],
  controllers: [AppController, AlunoController ],
  providers: [AppService],
})
export class AppModule {}
