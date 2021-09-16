import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from "@angular/material/table";
import { TableComponent } from './table.component';
import { MatCheckboxModule } from '@angular/material/checkbox'; 

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
