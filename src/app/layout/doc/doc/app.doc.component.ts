import { NgClass } from '@angular/common';
import { ChangeDetectorRef, Component, HostListener, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Doc } from '../../../interfaces/doc';

@Component({
  selector: 'app-doc',
  templateUrl: './app.doc.component.html',
  styleUrl: './app.doc.component.scss'
})
export class AppDoc {
  @Input() docTitle!: string;

  @Input() docs!: Doc[];

  @Input() header!: string;

  @Input() description!: string;

  @Input() apiDocs!: string[];

  @ViewChild('titleHeader') titleHeader: any = null
  @ViewChild('titleHeaderWrapper') titleHeaderWrapper: any = null
  @ViewChild('componentHeader') componentHeader: any = null

  @HostListener('window:scroll', [])
  onScroll() {
    const pageYOffset = document.documentElement.scrollTop
    this.titleHeader.nativeElement.style.fontSize = `${35 - (pageYOffset / 7) > 24 ? 35 - (pageYOffset / 8) : 20}px`
    this.titleHeaderWrapper.nativeElement.style.marginBottom = `${70 - (pageYOffset / 2) > 0 ? 70 - (pageYOffset / 2) : 0}px`
    if (pageYOffset > 140) {
      this.componentHeader.nativeElement.classList.add('fixed')
    } else {
      this.componentHeader.nativeElement.classList.remove('fixed')

    }
  }
}
