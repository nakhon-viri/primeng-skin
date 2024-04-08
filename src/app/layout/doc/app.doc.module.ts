import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppDoc } from './doc/app.doc.component';
import { DocSectionComponent } from './doc-section/app.docsection.component';
import { DocsectionNavComponent } from './doc-section-nav/app.docsection-nav.component';
import { DocsectiontextComponent } from './doc-sectiontext/docsectiontext.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [AppDoc, DocSectionComponent, DocsectionNavComponent, DocsectiontextComponent],
    declarations: [AppDoc, DocSectionComponent, DocsectionNavComponent, DocsectiontextComponent]
})
export class AppDocModule { }
