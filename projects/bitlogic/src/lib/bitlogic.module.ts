import { NgModule } from '@angular/core';
// import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { ButtonModule } from './components/button/button.module';
import { MenuModule } from './components/menu/menu.module';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    ToolbarModule,
    ButtonModule,
    MenuModule    
  ]
})
export class BitlogicModule { }
