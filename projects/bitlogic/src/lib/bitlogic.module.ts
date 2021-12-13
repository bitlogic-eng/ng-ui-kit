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
import { SnackbarModule } from './components/snackbar/snackbar.module';
import { ToolbarMenuModule } from './components/toolbar-menu/toolbar-menu.module';

@NgModule({
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
    StatusModule,
    SnackbarModule,
    ToolbarMenuModule,
  ]
})
export class BitlogicModule { }
