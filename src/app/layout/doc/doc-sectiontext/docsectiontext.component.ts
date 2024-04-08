import { Component, ElementRef, Input, numberAttribute } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-docsectiontext',
  templateUrl: './docsectiontext.component.html',
  styleUrl: './docsectiontext.component.scss'
})
export class DocsectiontextComponent {
  @Input() title?: string = '';

  @Input() id?: string = '';

  @Input({ transform: numberAttribute }) level!: number;

  @Input() label!: string;

  @Input() description?: string = '';

  constructor(public location: Location, public el: ElementRef) { }

  navigate(event: any) {
    if (typeof window !== undefined) {
      const hash = window.location.hash.substring(1);
      const parentElement = event.currentTarget.parentElement as HTMLElement;
      this.location.go(this.location.path().split('#')[0] + '#' + this.id);

      setTimeout(() => {
        parentElement.scrollIntoView({ block: 'start', behavior: 'smooth', });
      }, 1);

      hash === this.id && event.preventDefault();
    }
  }
}
