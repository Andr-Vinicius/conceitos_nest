/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, NotFoundException } from '@nestjs/common';
import { MessageEntity } from './entities/messages.entity';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

// Vai ser basicamente um repositório, uma interface entre a minha aplicação e a Base de Dados
@Injectable()
export class MessagesService {
  private lastId = 1;
  // Setando um dado inicial pro nosso "Banco de Dados"
  private messages: MessageEntity[] = [
    {
      id: 1,
      text: 'Hello World',
      from: 'Vinicius',
      to: 'Todos',
      opened: false,
      date: new Date(),
    },
  ];

  findAll() {
    return this.messages;
  }

  findOne(id: string) {
    const message = this.messages.find((message) => message.id === Number(id));
    if (!message)
      throw new NotFoundException(`Message with id ${id} not found`);

    return message;
  }

  create(createMessageDto: CreateMessageDto) {
    this.lastId++;
    const id = this.lastId;
    const newMessage = {
      id,
      ...createMessageDto,
      opened: false,
      date: new Date(),
    };
    this.messages.push(newMessage);
    return newMessage;
  }

  update(id: string, updateMessageDto: UpdateMessageDto) {
    const originalMessage = this.findOne(id);
    if (!originalMessage)
      throw new NotFoundException(`Message with id ${id} not found`);
    const messsageIndex = this.messages.findIndex(
      (message) => message.id === Number(id),
    );

    if (originalMessage) {
      this.messages[messsageIndex] = {
        ...originalMessage,
        ...updateMessageDto,
      };
    }
    return this.messages[messsageIndex];
  }

  delete(id: string) {
    const messageId = this.findOne(id);

    if (messageId) {
      this.messages.splice(this.messages.indexOf(messageId), 1);
    } else {
      throw new NotFoundException(`Message with id ${id} not found`);
    }
  }
}
