import { Component, Output, EventEmitter, Input } from '@angular/core';

/**
 * The Menu Options
 * @interface MenuOption
 */
export interface MenuOption {
  id: string, 
  name: string, 
  icon: string, 
  link: string,
  linkType?: string
}

@Component({
  selector: 'bit-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  /**
   * Is the menu items
   * @type Array<MenuOption>
   * @private
   */
  private _options: Array<MenuOption> = [];

  /**
   * Is the menu items
   * @requires
   */
  @Input()
  set options(options: MenuOption[]) {
    if (options) {
      this._options = options; 
      const regexp = new RegExp("^(http|https)://", "i");
  
      this._options.map((op) => {
        
        if (regexp.test(op.link)) {
          op.linkType = "outside";
        } else {
          op.linkType = "internal";
        }
  
      })  
    } else {
      throw 'Error: options not exists';
    }
  }
  get options() {
    return this.getOptions();
  }

  /**
   * The item showed 
   * @default
   */
  @Input()
  numberItemShowed: number = 0;

  /**
   * Is the selected option id
   * @type string 
   */
  @Input()
  selectedOptionId: string = null;

  /**
   * More Option. When the menu has several items, it's replaced for the item moreOption.
   * @type MenuOption
   */
  @Input()
  moreOption: MenuOption = null;

  @Input()
  isLoading: boolean = false;

  /**
   * Menu click handler
   */
  @Output() 
  menuClick: EventEmitter<MenuOption> = new EventEmitter<MenuOption>();

  /**
   * Constructor
   */
  constructor() {}

  /**
   * Check the item selected
   * @returns boolean
   */
  isOptionSelected(option: MenuOption) : boolean {
    return this.selectedOptionId === option.id;
  }
  
  getOptions(): MenuOption[] {
    let optionsToShow: MenuOption[] = this._options.slice();
    if (this.moreOption !== null && this.numberItemShowed > 0 && this.numberItemShowed < this._options.length)
    { 
      optionsToShow = optionsToShow.slice(0,this.numberItemShowed).concat([this.moreOption]);
    }

    return optionsToShow;
  }


  /**
   * Menu click handler
   * @param MenuOption
   */
  onOptionClick(optionSelected: MenuOption) {
    this.selectedOptionId = optionSelected.id;
    this.menuClick.emit(optionSelected);
  }

}
