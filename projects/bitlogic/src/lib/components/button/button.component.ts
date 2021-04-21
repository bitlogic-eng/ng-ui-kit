import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

const ButtonType = {
  "button": "btn",
  "fab": "fab",
  "link": "link"
}

const ButtonColor = {
  "basic": "main",
  "primary": "primary",
  "secondary": "secondary",
  "success": "success",
  "warning": "warning",
  "danger": "danger",
  "high": "high",
  "info": "info"
}

const ButtonStyle = {
  "text": "btn-text",
  "outlined": "btn-outline",
  "raised": "btn",
  "flat": "flat"
}

const COLOR_DEFAULT = ButtonColor.basic;
const STYLE_DEFAULT = ButtonStyle.raised;
const TYPE_DEFAULT = ButtonType.button;

@Component({
  selector: 'bit-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  private _color: string;
  private _disabled: boolean = false;
  private _type: string;
  private _style: string;
  private _colorClass: string = COLOR_DEFAULT; 
  private _styleClass: string = STYLE_DEFAULT;
  private _typeClass: string = TYPE_DEFAULT;

  @Input()
  set color(color: string) {
    this._color = color;
    this._colorClass = ButtonColor[color] ||  COLOR_DEFAULT;
  }
  get color() {
    return this._color;
  }

  @Input()
  set type(type: string) {
    this._type = type;
    this._typeClass = ButtonType[type] || TYPE_DEFAULT;
  }
  get type() {
    return this._type;
  }

  @Input()
  set sty(style: string) {
    this._style = style;
    this._styleClass = ButtonStyle[this._style] || STYLE_DEFAULT;
  }
  get sty() {
    return this._style;
  }

  @Input()
  set disabled(disabled) {
    this._disabled = disabled != null;
  }
  get disabled() {
    return this._disabled;
  }


  @Output()
  btnEvent = new EventEmitter();

  constructor() { 
  }

  ngOnInit(): void {
  }

  getClass() {
    const commun = '' //'shadow-none' ;
    // + (this._type === ButtonStyle.fab ? ' btn-rounded' : '');
    
    return `${commun} ${this._typeClass} ${this._styleClass}-${this._colorClass}`;
  }

  onClickButton() {
    this.btnEvent.emit();
  }
}
