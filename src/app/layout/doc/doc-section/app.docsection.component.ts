import { Component, Input } from '@angular/core';
import { Doc } from '../../../interfaces/doc';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-docsection',
  templateUrl: './app.docsection.component.html',
  styleUrl: './app.docsection.component.scss'
})
export class DocSectionComponent {
  @Input() docs!: Doc[];

  @Input() apiDocs!: any[];

  trackById(doc: Doc) {
    return doc.id || undefined;
  }
}
