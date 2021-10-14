import { Component, OnInit, Input, EventEmitter, Output, ViewChild, AfterViewInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';


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
export class TableComponent implements OnInit, AfterViewInit {

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
  set data(data: any) {
    this.dataSource = new MatTableDataSource<any>(data);
  }
  get data() {
    return this.dataSource;
  }

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

  @Input()
  set enablePagination (enablePagination: boolean) {
    this._enablePagination = enablePagination;
    this.dataSource.paginator = this.paginator;
  }
  get enablePagination() {
    return this._enablePagination;
  }

  @Output()
  rowClick: EventEmitter<any> = new EventEmitter();

  private dataSource: MatTableDataSource<any>;
  private _headers: TableHeader[];
  private _enableSelection: boolean;
  private _enablePagination: boolean;
  columnsToDisplay: string[];
  selection = new SelectionModel<any>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { 

  }

  ngOnInit(): void {
    // this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  onClick(row: any){
    this.selection.toggle(row);
    this.rowClick.emit(row);
  }

}
