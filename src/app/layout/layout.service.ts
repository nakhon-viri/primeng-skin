import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private _isCollapsed: boolean = false
  get isCollapsed() {
    return this._isCollapsed
  }
  set isCollapsed(value: boolean) {
    if (value) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'initial'
    }
    this._isCollapsed = value
  }
}
