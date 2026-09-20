import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//  nest g controller nome_controller/pasta --no-spec (Sem testes)
@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // Método padrão para requisições de leitura (Read)
  getHello(): string {
    return this.appService.getHello();
  }
}
