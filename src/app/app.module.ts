import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { ConceptsManualModule } from 'src/concepts-manual/concepts-manual.module';

// Encapsulamento da aplicação
@Module({
  imports: [],
  controllers: [AppController], // Controla as requisições e respostas
  providers: [AppService], // Lógica de negócio, serviços e dependências
  exports: [], // Como ele é o raiz, não será importado em outros módulos
})
export class AppModule {}
