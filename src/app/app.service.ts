import { Injectable } from '@nestjs/common';

// nest g service nome_service (Automático)
// Regras de negócio/Lógica
@Injectable() // Injeção de dependências
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
