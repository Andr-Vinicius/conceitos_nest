export class MessageEntity {
  // Uma entidade é basicamente um modelo de dados, que representa uma tabela no banco de dados
  id: number;
  text: string;
  from: string;
  to: string;
  opened: boolean;
  date: Date;
}
