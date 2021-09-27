import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';

export interface SelectOption {
  id: number,
  viewValue: string,
  meta?: any
};

export interface SelectButtons {
  selectAll: string,
  deselectAll: string
};

export interface OtherText {
  text1: string,
  text2: string
}


@Component({
  selector: 'bit-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  selectControl = new FormControl('');
  allSelected = false;

  @ViewChild('select') select: MatSelect;

  @Input()
  label: string;

  @Input()
  options: SelectOption[];

  @Input()
  isMultiple: boolean;

  @Input()
  selectButtons: SelectButtons = {selectAll: 'Select All', deselectAll: 'Deselect All'};

  @Input()
  otherText: OtherText = {text1: 'other', text2: 'others'}

  @Output()
  selectChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.selectControl.valueChanges.subscribe(()=>{
      this.selectChange.emit(this.selectControl.value)
    })
  }

  onSelectionChange($event) {

  }

  selectAll() {
    this.select.options.forEach((item: MatOption) => { 
      if(!item.disabled) {
        item.select();
      }
    });
    this.allSelected = true;
  }

  deselectAll() {
    this.select.options.forEach((item: MatOption) => item.deselect());
    this.allSelected = false;
  }

}
