import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Put,
  Post,
  Delete,
  Query,
} from '@nestjs/common';
import { MessagesService } from './messages.service';

// Class Decorator
@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @HttpCode(HttpStatus.OK)
  @Get('/')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findAll(@Query() pagination: any) {
    return this.messagesService.findAll();
  }

  // MethodDecorator
  @Get(':id')
  // ParameterDecorator
  findOne(@Param('id') id: string) {
    return this.messagesService.findOne(id);
  }

  @Post()
  create(@Body() body: any): any {
    return this.messagesService.create(body);
  }

  // Update -> PATCH / PUT
  // PATCH -> Atualizar dados de um recurso (Parcial)
  // PUT -> Atualizar dados de um recurso (Completo)
  @Put(':id')
  update(@Param('id') id: string, @Body() body: any): any {
    return this.messagesService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.messagesService.delete(id);
  }
}
