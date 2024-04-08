import { Component } from '@angular/core';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { BasicDoc } from '../../doc/button/basicdoc';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [AppDocModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  docs = [
    {
      id: 'import',
      label: 'Import',
      component: BasicDoc
    },
    {
      id: 'import',
      label: 'Import',
      component: BasicDoc
    }, {
      id: 'import',
      label: 'Import',
      component: BasicDoc
    }, {
      id: 'import',
      label: 'Import',
      component: BasicDoc
    }, {
      id: 'import',
      label: 'Import',
      component: BasicDoc
    }, {
      id: 'import',
      label: 'Import',
      component: BasicDoc
    }, {
      id: 'import',
      label: 'Import',
      component: BasicDoc
    }, {
      id: 'import',
      label: 'Import',
      component: BasicDoc
    }, {
      id: 'import',
      label: 'Import',
      component: BasicDoc
    }, {
      id: 'import',
      label: 'Import',
      component: BasicDoc
    },
  ];
}
