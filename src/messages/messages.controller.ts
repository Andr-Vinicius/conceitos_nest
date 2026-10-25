import { Controller, Get, Param, Post } from '@nestjs/common';

// Class Decorator
@Controller('messages')
export class MessagesController {
  @Get('/')
  findAll(): string {
    return 'All messages';
  }

  // MethodDecorator
  @Get(':id')
  // ParameterDecorator
  findOne(@Param('id') id: string): string {
    return `Message: ${id}`;
  }

  @Post()
  create() {
    return `AAAAAAAAAAAAAAAAAA`;
  }
}
