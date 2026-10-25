import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from 'src/messages/messages.module';
//import { ConceptsManualModule } from 'src/concepts-manual/concepts-manual.module';

// Encapsulamento da aplicação
@Module({
  imports: [MessagesModule],
  controllers: [AppController], // Controla as requisições e respostas
  providers: [AppService], // Lógica de negócio, serviços e dependências
  exports: [], // Como ele é o raiz, não será importado em outros módulos
})
export class AppModule {}
