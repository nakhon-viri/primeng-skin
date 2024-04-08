import { booleanAttribute, ChangeDetectorRef, Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Code, ExtFile, RouteFile } from '../../../interfaces/code';


@Component({
  selector: 'app-code',
  standalone: true,
  imports: [],
  templateUrl: './app.code.component.html',
  styleUrl: './app.code.component.scss',
})
export class AppCodeComponent {
  @Input() code!: Code | undefined;

  @Input() service!: any;

  @Input() selector!: string;

  @Input() extFiles: ExtFile[] = [];

  @Input() routeFiles: RouteFile[] = [];

  @Input({ transform: booleanAttribute }) hideToggleCode: boolean = false;

  @Input({ transform: booleanAttribute }) hideCodeSandbox: boolean = false;

  @Input({ transform: booleanAttribute }) hideStackBlitz: boolean = false;

  @ViewChild('codeElement') codeElement: ElementRef;

  fullCodeVisible: boolean = false;

  @Input() lang!: string;

  constructor(@Inject(PLATFORM_ID) public platformId: any, @Inject(DOCUMENT) public document: Document, private ref: ChangeDetectorRef,) { }

  ngAfterViewChecked() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.docCode.nativeElement.style.height = `${this.preCode.nativeElement.offsetHeight}px`
      })
      if ((window as any)['Prism'] && this.codeElement && !this.codeElement.nativeElement.classList.contains('prism')) {
        (window as any)['Prism'].highlightElement(this.codeElement.nativeElement);
        this.codeElement.nativeElement.classList.add('prism');
        this.codeElement.nativeElement.parentElement.setAttribute('tabindex', '-1');
      }
    }
  }

  ngOnInit() {
    this.lang = this.getInitialLang();
  }

  @ViewChild('preCode') preCode: ElementRef;
  @ViewChild('docCode') docCode: ElementRef;
  changeLang(lang: string) {
    this.lang = lang;
    this.docCode.nativeElement.style.height = `${this.preCode.nativeElement.offsetHeight}px`
    this.ref.detectChanges();
  }

  getInitialLang() {
    if (this.code) {
      return Object.keys(this.code)[0];
    }
    return ''
  }

  
  async copyCode() {
    // await navigator.clipboard.writeText(this.code[this.lang]);
  }

  // getCode(lang: string = 'basic') {
  //   if (this.code) {
  //     if (this.fullCodeVisible || this.hideToggleCode) {
  //       return this.code[lang];
  //     } else {
  //       return this.code['basic'];
  //     }
  //   }
  // }

  toggleCode() {
    this.fullCodeVisible = !this.fullCodeVisible;
    this.fullCodeVisible && (this.code?.html ? (this.lang = 'html') : (this.lang = 'typescript'));
    !this.fullCodeVisible && (this.lang = 'basic');
  }

  onCodeInit() {

  }
}
