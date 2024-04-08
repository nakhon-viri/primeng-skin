import { Component, Input } from '@angular/core';
import { Doc } from '../../../interfaces/doc';

@Component({
  selector: 'app-docsection-nav',
  templateUrl: './app.docsection-nav.component.html',
  styleUrl: './app.docsection-nav.component.scss'
})
export class DocsectionNavComponent {
  @Input() docs!: Doc[];

}
