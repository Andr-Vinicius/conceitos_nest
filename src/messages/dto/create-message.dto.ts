import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMessageDto {
  // readonly -> Não pode ser alterado depois de criado
  @IsString()
  @IsNotEmpty()
  readonly text: string;
}

/*
@IsString()
@IsNotEmpty()
readonly from: string;

@IsString()
@IsNotEmpty()
readonly to: string;

id: number; É gerado na criação
opened: boolean; - Quando é criado, o valor é sempre false
date: Date; É gerado na criação
*/
