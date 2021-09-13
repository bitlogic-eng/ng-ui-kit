import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms'

export interface SelectOption {
  id: number,
  viewValue: string,
  meta?: any
};

const DEFAULT_OPTION = {
  desc: 'Todos'
}

@Component({
  selector: 'bit-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  selectControl = new FormControl('');

  @Input()
  defaultOption: SelectOption = null;

  @Input()
  options: SelectOption[];

  @Input()
  isMultiple: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log(`onClick`);
  }

  onSelectionChange($event) {
    console.log(`onSelectionChange`);
    console.log($event);
    console.log($event.value);

    const value = $event.value;

    if (Array.isArray(value) && value.length > 1) {
      console.log(`Se seleccionaron ${value.length} items`);
    }
        


    // Se seleccionaron 3 items
    // const selectedText = $('#career-dropdown span > span')[0];

    // if (event) {
    //   const valueLength = event.value.length;

    //   if (selectedText) {
    //     if (valueLength > 2) {
    //       this._translate.stream('label.multipleSelectedAndTotalCareers', { quantity: valueLength - 1 }).subscribe(result => {
    //         selectedText.textContent = result;
    //       });
    //     } else if (valueLength > 0) {
    //       selectedText.textContent = event.value[valueLength - 1].description;
    //     }
    //   }
    // } else {
    //   selectedText.textContent = CAREER_DEFAULT.description;
    // }

  }
}
