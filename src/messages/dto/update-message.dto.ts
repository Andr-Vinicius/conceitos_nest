import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsOptional } from 'class-validator';
import { CreateMessageDto } from './create-message.dto';

export class UpdateMessageDto extends PartialType(CreateMessageDto) {
  // Como eu estou alterando os dados, eu seto eles como opcionais
  @IsBoolean()
  @IsOptional() // Pois eu estou criando o campo
  readonly opened: boolean;
}
