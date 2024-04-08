import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeComponent } from '../../layout/doc/doc-code/app.code.component';
import { Code } from '../../interfaces/code';
import { DocexampleComponent } from '../../layout/doc/doc-example/docexample.component';

@Component({
    selector: 'button-basic-demo',
    standalone: true,
    imports: [ButtonModule, AppDocModule, DocexampleComponent],
    template: `
        <app-docsectiontext>
            <p>Text to display on a button is defined with the <i>label</i> property.</p>
        </app-docsectiontext>
        <app-docexample [code]="code">
            <p-button label="Submit"></p-button>
        </app-docexample>
      
    `
})
export class BasicDoc {
    code: Code = {
        basic: `<p-button label="Submit"></p-button>`,

        html: `<div class="card flex justify-content-center">
    <p-button label="Submit"></p-button>
</div>`,

        typescript: `import { Component } from '@angular/core';

@Component({
    selector: 'button-basic-demo',
    templateUrl: './button-basic-demo.html'
})
export class ButtonBasicDemo { }`
    };
}
