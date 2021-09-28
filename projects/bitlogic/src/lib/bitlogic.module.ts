import { NgModule } from '@angular/core';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { ButtonModule } from './components/button/button.module';
import { MenuModule } from './components/menu/menu.module';
import { SliderModule } from './components/slider/slider.module';
import { SearchModule } from './components/search/search.module';
import { SelectModule } from './components/select/select.module';
import { TableModule } from './components/table/table.module';
import { ChipsModule } from './components/chips/chips.module';
import { StatusModule } from './components/status/status.module';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    ToolbarModule,
    ButtonModule,
    MenuModule,
    SliderModule,
    SearchModule,
    SelectModule,
    TableModule,
    ChipsModule,
    StatusModule
  ]
})
export class BitlogicModule { }
