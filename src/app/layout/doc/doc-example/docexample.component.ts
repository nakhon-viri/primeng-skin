import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
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

  @ViewChild('codeCollopse') codeCollopse: ElementRef;
  isOpenCode: boolean = false

  onCodeCollapse() {
    this.isOpenCode = !this.isOpenCode
    if (this.isOpenCode) {
      this.codeCollopse.nativeElement.classList.add('code-collopse')
      return
    }
    this.codeCollopse.nativeElement.classList.remove('code-collopse')
  }
}
