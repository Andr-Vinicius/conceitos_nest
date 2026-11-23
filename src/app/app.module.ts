import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from 'src/messages/messages.module';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { ConceptsManualModule } from 'src/concepts-manual/concepts-manual.module';

// Encapsulamento da aplicação
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      database: 'postgres',
      password: '1234',
      autoLoadEntities: true, // Carrega as entidades sem precisar especificar
      synchronize: true, // Sincroniza o código com o BD, não é usado em produção
    }),
    MessagesModule,
  ],
  controllers: [AppController], // Controla as requisições e respostas
  providers: [AppService], // Lógica de negócio, serviços e dependências
  exports: [], // Como ele é o raiz, não será importado em outros módulos
})
export class AppModule {}
