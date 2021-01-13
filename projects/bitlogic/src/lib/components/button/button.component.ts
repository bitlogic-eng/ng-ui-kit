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
  "bit-basic": "bt-btn-basic",
  "bit-outlined": "bt-btn-outlined",
  "bit-raised": "bt-btn-raised",
  "bit-flat": "bt-btn-flat"
}

const colorDefault = ColorType["basic"];

@Component({
  selector: 'bit-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, AfterViewInit {

  _color: string;
  colorClass: string;

  @ViewChild('btn') btnRef: ElementRef;

  @Input()
  set color(color: string) {
    this._color = color;
    this.colorClass = ColorType[color] ||  colorDefault;
  }
  get color() {
    return this._color;
  }

  @Input()
  btntype: string;

  @Output()
  btnEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // console.log(this.btnRef.nativeElement.html);
    console.log(this.btnRef);
    console.log(this.btntype);


  }

}
