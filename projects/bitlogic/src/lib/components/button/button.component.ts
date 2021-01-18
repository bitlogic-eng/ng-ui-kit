import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';


const ColorType = {
  "basic": "bt-basic",
  "primary": "bt-primary",
  "secondary": "bt-secondary",
  "success": "bt-success",
  "warning": "bt-warning",
  "danger": "bt-danger",
  "high": "bt-high",
  "alt": "bt-alt",
  "info": "bt-info"
}

const ButtonType = {
  "basic": "bt-btn-basic",
  "bit-outlined": "bt-btn-outlined",
  "bit-raised": "bt-btn-raised",
  "bit-flat": "bt-btn-flat"
}

const BUTTON_HOST_ATTRIBUTES = [
  'bit-button',
  'bit-flat-button',
  'bit-icon-button',
  'bit-raised-button'
];

const colorDefault = ColorType[ColorType.basic];

@Component({
  selector: 'bit-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  _color: string;
  _disabled: boolean = false;
  _type: string;
  buttonClass: string;

  @Input()
  set color(color: string) {
    this._color = color;
    this.buttonClass = ColorType[color] ||  colorDefault;
  }
  get color() {
    return this._color;
  }

  @Input()
  set disabled(disabled) {
    this._disabled = disabled != null;
  }
  get disabled() {
    return this._disabled;
  }

  @Input()
  set type(type: string) {
    this._type = type;
  }
  get type() {
    return this._type;
  }

  @Output()
  btnEvent = new EventEmitter();

  constructor() { 
  }

  ngOnInit(): void {
  }

  onClickButton() {
    this.btnEvent.emit();
  }
}
