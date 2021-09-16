import { NgModule } from '@angular/core';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { ButtonModule } from './components/button/button.module';
import { MenuModule } from './components/menu/menu.module';
import { SliderModule } from './components/slider/slider.module';
import { SearchModule } from './components/search/search.module';
<<<<<<< HEAD
import { SelectModule } from './components/select/select.module';
=======
import { TableModule } from './components/table/table.module';
>>>>>>> master

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
<<<<<<< HEAD
    SelectModule
=======
    TableModule
>>>>>>> master
  ]
})
export class BitlogicModule { }
