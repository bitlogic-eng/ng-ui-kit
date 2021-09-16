import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';

export interface TableHeader {
  key: string,
  text: string,
  orden?: string
  hide?: boolean,
  class?: string
}

@Component({
  selector: 'bit-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  private _headers: TableHeader[];
  private _enableSelection: boolean;
  columnsToDisplay: string[];
  selection = new SelectionModel<any>(true, []);

  @Input()
  set headers(headers: TableHeader[]){
    this._headers = headers;
    
    this.columnsToDisplay = [];
    if (this._enableSelection) {
      this.columnsToDisplay = ['select'];
    } else {
      this.selection.clear();
    }
    this.columnsToDisplay = [...this.columnsToDisplay, ...this._headers.map(header => header.key)]

    
  }
  get headers() {
    return this._headers;
  }

  @Input()
  data;

  @Input()
  set enableSelection(enableSelection: boolean) {
    this._enableSelection = enableSelection;
    this.columnsToDisplay = [];
    if (this._enableSelection) {
      this.columnsToDisplay = ['select'];
    } else {
      this.selection.clear();
    }
    this.columnsToDisplay = [...this.columnsToDisplay, ...this._headers.map(header => header.key)]
    
  }

  @Output()
  rowClick: EventEmitter<any> = new EventEmitter();

  constructor() { 

  }

  ngOnInit(): void {
    
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }  

  onClick(row: any){
    this.selection.toggle(row);
    this.rowClick.emit(row);
  }

}
