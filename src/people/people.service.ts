import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-people.dto';
import { UpdatePersonDto } from './dto/update-people.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { People } from './entities/people.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PeopleService {
  constructor(
    @InjectRepository(People)
    private readonly peopleRepository: Repository<People>,
  ) {}

  async create(createPersonDto: CreatePersonDto) {
    try {
      const peopleData = {
        name: createPersonDto.name,
        passwordHash: createPersonDto.password,
        email: createPersonDto.email,
      };

      const newPeople = this.peopleRepository.create(peopleData);
      return this.peopleRepository.save(newPeople);
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    const people = await this.peopleRepository.find({
      order: {
        id: 'DESC',
      },
    });
    return people;
  }

  async findOne(id: number) {
    const people = await this.peopleRepository.findOneBy({
      id,
    });

    return people;
  }

  async update(id: number, updatePersonDto: UpdatePersonDto) {
    const peopleData = {
      name: updatePersonDto?.name,
      passwordHash: updatePersonDto?.password,
    };

    const people = await this.peopleRepository.preload({
      id,
      ...peopleData,
    });

    if (!people) throw new NotFoundException(`People not found!`);

    return this.peopleRepository.save(people);
  }

  async remove(id: number) {
    const people = await this.peopleRepository.findOneBy({
      id,
    });

    if (!people) throw new NotFoundException(`People not found!`);

    return this.peopleRepository.remove(people);
  }
}
