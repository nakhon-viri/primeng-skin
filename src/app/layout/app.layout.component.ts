import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { LayoutService } from './layout.service';

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, ContentComponent],
    template: `
    <app-header></app-header>
    <div class="menu-mask" (click)="layoutService.isCollapsed = false" [class.open]="layoutService.isCollapsed"></div>
    <app-content>
         <router-outlet></router-outlet>
    </app-content>
    `,
    styles: `
       
    `
})
export class AppLayoutComponent {
    constructor(public layoutService: LayoutService) { }
}
