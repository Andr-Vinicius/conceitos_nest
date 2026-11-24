import { Injectable, NotFoundException } from '@nestjs/common';
import { Message } from './entities/messages.entity';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Vai ser basicamente um repositório, uma interface entre a minha aplicação e a Base de Dados
@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message) // Estudar sobre o Repository
    private readonly messageRepository: Repository<Message>,
  ) {}

  async findAll() {
    const messages = await this.messageRepository.find();
    return messages;
  }

  async findOne(id: string) {
    //const message = this.messages.find((message) => message.id === Number(id));
    const message = await this.messageRepository.findOne({
      where: {
        id: Number(id),
      },
    });
    if (!message)
      throw new NotFoundException(`Message with id ${id} not found`);

    return message;
  }

  async create(createMessageDto: CreateMessageDto) {
    const newMessage = {
      ...createMessageDto,
      opened: false,
      date: new Date(),
    };
    const message = this.messageRepository.create(newMessage); // Create não é assincrono, portanto não retorna uma Promisse
    return this.messageRepository.save(message);
  }

  async update(id: string, updateMessageDto: UpdateMessageDto) {
    const partialUpdateDTO = {
      opened: updateMessageDto?.opened,
      text: updateMessageDto?.text,
    };

    const message = await this.messageRepository.preload({
      id: Number(id),
      ...partialUpdateDTO,
    });
    if (!message)
      throw new NotFoundException(`Message with id ${id} not found`);
    await this.messageRepository.save(message);
    return message;
  }

  async delete(id: string) {
    const message = await this.messageRepository.findOneBy({
      id: Number(id),
    });
    if (!message)
      throw new NotFoundException(`Message with id ${id} not found`);
    return this.messageRepository.remove(message);
  }
}
