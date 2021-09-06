import { NgModule } from '@angular/core';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { ButtonModule } from './components/button/button.module';
import { MenuModule } from './components/menu/menu.module';
import { SliderModule } from './components/slider/slider.module';
import { SearchModule } from './components/search/search.module';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    ToolbarModule,
    ButtonModule,
    MenuModule,
    SliderModule,
    SearchModule
  ]
})
export class BitlogicModule { }