import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MenuOption } from '../menu/menu.component';

@Component({
  selector: 'bit-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrls: ['./toolbar-menu.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ToolbarMenuComponent {

  @Input()
  title: string;

  @Input()
  date: string;

  @Input()
  userName: string;

  @Input()
  avatar: string;

  @Input()
  logo: string;

  @Input()
  menu: MenuOption[] = [];
 
  @Input()
  moreOption = {"id":"_more", "name": "Más", "icon": "more_vert", "link": "/more"}

  @Input()
  numberItemShowed = 0;

  @Input()
  toolbarHeight = 'small';

  @Input()
  isLoading: boolean = false;


  @Output('profileClick') profileClick: EventEmitter<any> = new EventEmitter<any>();
  @Output('menuClick') menuClick: EventEmitter<any> = new EventEmitter<any>();
  
  onProfileClick() {
    this.profileClick.emit('profile has clicked');
  }

  onMenuClick($event: string) {
    this.menuClick.emit($event);
  }

}
