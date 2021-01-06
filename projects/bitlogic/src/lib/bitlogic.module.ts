import { NgModule } from '@angular/core';
import { BitlogicComponent } from './bitlogic.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [BitlogicComponent, ToolbarComponent],
  imports: [
  ],
  exports: [
    BitlogicComponent,
    
    ToolbarComponent
    
  ]
})
export class BitlogicModule { }
