import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from "../toolbar/toolbar.module";
import { MenuModule } from "../menu/menu.module";
import { ToolbarMenuComponent } from './toolbar-menu.component';

@NgModule({
  declarations: [
    ToolbarMenuComponent
  ],
  imports: [
    CommonModule,
    ToolbarModule,
    MenuModule
    
  ],
  exports: [ToolbarMenuComponent]
})
export class ToolbarMenuModule { }
