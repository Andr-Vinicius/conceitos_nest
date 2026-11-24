import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonDto } from './create-people.dto';

export class UpdatePersonDto extends PartialType(CreatePersonDto) {}
