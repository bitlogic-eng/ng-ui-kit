import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bit-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  /**
   * Is the title for the toolbar
   * @required
   */ 
  @Input()
  title: string = 'Title';

  /**
   * Is the version to application
   */
  @Input()
  version: string = 'v0.0.0';


  /**
   * Is the current date
   */
  @Input()
  currentDate: string;

  /**
   * Is the current user
   */
  @Input()
  userName: string;

  /**
   * Profile Click handler
   */
  @Output()
  openProfile = new EventEmitter();

  constructor() { }

  onOpenProfile() {
    this.openProfile.emit(this.userName); // TODO send user data.
  }

}
