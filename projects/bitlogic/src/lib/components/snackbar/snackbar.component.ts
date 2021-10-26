import { Component, OnInit, Input, ViewEncapsulation, ElementRef, Renderer2 } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBarRef } from '@angular/material/snack-bar';
import { SnackbarTemplateComponent } from './snackbar-template.component';

export interface SnackBarConfig {
  duration?: number,
  horizontalPosition?: MatSnackBarHorizontalPosition,
  verticalPosition?: MatSnackBarVerticalPosition,
}


@Component({
  selector: 'bit-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SnackbarComponent implements OnInit {

  private _open: boolean;
  private _setTimeout = null;
  // private _snackbarRef: MatSnackBarRef<SnackbarTemplateComponent>;

  @Input()
  message: string;

  @Input()
  duration = 5;

  @Input()
  hp: MatSnackBarHorizontalPosition = 'center';

  @Input()
  vp: MatSnackBarVerticalPosition = 'bottom';

  @Input()
  config: SnackBarConfig;

  @Input()
  set open(open: boolean) {
    this._open = open;

    this.dismiss();

    if (this._open && this.message !== "") {
      
      const config: SnackBarConfig =  {
        duration: this.duration,
        horizontalPosition: this.hp,
        verticalPosition: this.vp,      
      }
      
      const snackbar = this.openSnackBar(this.message, config);

      if (this.duration) {
        this._setTimeout = setTimeout(() => this.dismiss(), this.duration * 1000);
      }
    } 
  }

  constructor(private _snackBar: MatSnackBar, private elementRef: ElementRef, private renderer:Renderer2) {}

  ngOnInit(): void {
  }

  // openSnackBar(message: string, config: SnackBarConfig) {
  //   this._snackBar.open('Message archived', 'Undo', {  
  //     duration: 3000  
  //   });  
  // }

  openSnackBar(message: string, config?: SnackBarConfig): MatSnackBarRef<SnackbarTemplateComponent> {

    const snackbarRef = this._snackBar.openFromComponent(SnackbarTemplateComponent, {
      data: { 
        message: message
      },
      duration: (config.duration || this.duration) * 1000,
      horizontalPosition: config.horizontalPosition || this.hp,
      verticalPosition: config.verticalPosition || this.vp,
    });

    snackbarRef.onAction().subscribe(() => {
      console.log('onAction()');
      this.dismiss();
    })

    return snackbarRef;

  }

  dismiss() {
    const overlayWrapper = document.getElementsByClassName('cdk-global-overlay-wrapper');
    if (overlayWrapper.length !== 0) {
      overlayWrapper[0].remove();
      this.renderer.removeAttribute(this.elementRef.nativeElement, 'open');
      this.renderer.removeAttribute(this.elementRef.nativeElement, 'message');
      clearTimeout(this._setTimeout);
      this._setTimeout = null;
    }
  }

}
