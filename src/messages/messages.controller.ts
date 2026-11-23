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
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

// Class Decorator
@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  // DTO - Data Transfer Object
  // Objeto simples x Validar dados / Transformar dados (NestJS)

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
  create(@Body() createMessageDto: CreateMessageDto): any {
    return this.messagesService.create(createMessageDto);
  }

  // Update -> PATCH / PUT
  // PATCH -> Atualizar dados de um recurso (Parcial)
  // PUT -> Atualizar dados de um recurso (Completo)
  @Put(':id')
  update(@Param('id') id: string, updateMessageDto: UpdateMessageDto): any {
    return this.messagesService.update(id, updateMessageDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.messagesService.delete(id);
  }
}
