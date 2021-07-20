import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bit-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input()
  version: string = 'v0.0.0';

  @Input()
  title: string = 'Title';

  @Input()
  currentDate: string;

  @Output()
  openProfile = new EventEmitter();

  @Input()
  userName: string


  constructor() { }

  ngOnInit(): void {
  }

  onOpenProfile() {
    this.openProfile.emit(this.userName); // TODO send user data.
  }

}
