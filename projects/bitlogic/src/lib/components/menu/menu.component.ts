import { Component, Output, EventEmitter, Input } from '@angular/core';

/**
 * The Menu Opcion
 * @interface MenuOpcion
 */
export interface MenuOpcion {
  id: string, 
  name: string, 
  icon: string, 
  link: string, 
  selected: boolean
}

@Component({
  selector: 'bit-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  /**
   * Is the menu opcion 
   */
  @Input()
  options: MenuOpcion[] = [];

  /**
   * Menu click handler
   */
  @Output() 
  menuClick: EventEmitter<MenuOpcion> = new EventEmitter<MenuOpcion>();

  constructor() {}

  onOptionClick(optionSelected: MenuOpcion) {
    for (let option of this.options) {
      option.selected = false;
      if (option.id === optionSelected.id) {
        option.selected = true;
      }
    }

    this.menuClick.emit(optionSelected);

  }

}
