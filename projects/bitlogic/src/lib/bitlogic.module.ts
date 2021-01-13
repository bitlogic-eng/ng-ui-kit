import { NgModule } from '@angular/core';
// import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { ButtonModule } from './components/button/button.module';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    ToolbarModule,
    ButtonModule    
  ]
})
export class BitlogicModule { }
