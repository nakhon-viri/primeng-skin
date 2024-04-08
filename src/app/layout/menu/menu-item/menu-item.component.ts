import { JsonPipe, NgClass } from '@angular/common';
import { MenuItem } from './../../../interfaces/menu-item';
import { Component, Input, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: '[menuItem]',
  standalone: true,
  imports: [JsonPipe, RouterLink, RouterLinkActive, NgClass, StyleClassModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {
  @Input() menu: MenuItem
  @Input() lavel: number = 1

  @ViewChild('menuList') menuList: any = null

  isOpen: boolean = true

  get classMenuItem() {
    if (this.lavel === 1)
      return 'menu-item-root'
    else if (this.lavel === 2)
      return 'menu-item-category'
    else
      return 'menu-item'
  }

  onCollapse() {
    if (this.lavel !== 1) return
    this.isOpen = !this.isOpen
  }
}
