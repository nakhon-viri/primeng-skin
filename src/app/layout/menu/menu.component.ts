import { LayoutService } from './../layout.service';
import { Component, Input } from '@angular/core';
import { default as MenuData } from '../../../assets/data/menu.json';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from '../../interfaces/menu-item';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MenuItemComponent, NgClass],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Input() menus: MenuItem[] = MenuData.data

  constructor(public layoutService: LayoutService) { }

  isFogTop = false
  isFogBottom = true
  onScroll(e: any) {
    let b = e.target.scrollHeight - e.target.clientHeight;
    let c = e.target.scrollTop / b;
    if (c === 1) {
      this.isFogBottom = false
    } else {
      this.isFogBottom = true
    }

    if (e.target.scrollTop >= 100) {
      this.isFogTop = true
    } else {
      this.isFogTop = false
    }
  }
}
