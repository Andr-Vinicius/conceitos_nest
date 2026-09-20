import { Controller, Get } from '@nestjs/common';
import { ConceptsManualService } from './concepts-manual.service';

@Controller('concepts')
export class ConceptsManualController {
  constructor(private readonly conceptsService: ConceptsManualService) {}

  @Get()
  showText(): string {
    return this.conceptsService.showText('Testeeeeeeeeee');
  }
}
