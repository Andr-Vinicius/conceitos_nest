import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceptsManualService {
  showText(text: string): string {
    return text;
  }
}
