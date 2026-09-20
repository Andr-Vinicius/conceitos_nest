import { Module } from '@nestjs/common';
import { ConceptsManualController } from './concepts-manual.controller';
import { ConceptsManualService } from './concepts-manual.service';

// Criação pelo terminal: nest g module concepts-manual
@Module({
  imports: [],
  controllers: [ConceptsManualController],
  providers: [ConceptsManualService],
  exports: [],
})
export class ConceptsManualModule {}
