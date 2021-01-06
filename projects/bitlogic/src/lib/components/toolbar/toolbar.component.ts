import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bit-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input()
  version: string = 'v0.0.0';

  constructor() { }

  ngOnInit(): void {
  }

}
