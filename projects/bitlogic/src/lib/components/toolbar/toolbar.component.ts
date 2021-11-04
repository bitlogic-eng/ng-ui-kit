import { Component, Input, Output, EventEmitter } from '@angular/core';

const Height = {
  big: '184px',
  medium: '133px',
  small: '83px'
}

@Component({
  selector: 'bit-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  _height: string = Height['medium'];
  _type = 'medium';

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

  @Input()
  set height(height: 'big' | 'medium' | 'small') {
    this._height = Height[height];
    this._type = height;
  }

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
