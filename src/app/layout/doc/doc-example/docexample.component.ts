import { Component, Input } from '@angular/core';
import { Code } from '../../../interfaces/code';
import { AppCodeComponent } from '../doc-code/app.code.component';


@Component({
  selector: 'app-docexample',
  standalone: true,
  imports: [AppCodeComponent],
  templateUrl: './docexample.component.html',
  styleUrl: './docexample.component.scss',
})
export class DocexampleComponent {
  @Input() code: Code
  state = "open";

  isOpenCode: boolean = false
}
