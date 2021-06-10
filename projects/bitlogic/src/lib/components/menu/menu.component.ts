import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

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
export class MenuComponent implements OnInit {

  @Input()
  options: Array<MenuOpcion> = [];

  @Input()
  showLogo: boolean = false;

  @Output('menuClick') memuClick : EventEmitter<any> = new EventEmitter<any>();

  
  constructor() {}

  ngOnInit(): void {
  }

  onOptionClick(optionSelected: any) {
    for (let option of this.options) {
      option.selected = false;
      if (option.id === optionSelected.id) {
        option.selected = true;
      }
    }

    this.memuClick.emit(optionSelected);

  }

}
