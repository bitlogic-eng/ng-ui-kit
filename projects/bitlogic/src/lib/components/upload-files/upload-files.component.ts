import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

export interface FileData {
  id: string;
  name: string;
  size: number;
  date: number;
  status: string;
  isProcessing: boolean;
  actions: FileActions;
}

export interface FileActions {
  delete?: boolean;
  execute?: boolean;
  info?: boolean;
  download?: boolean;
}
@Component({
  selector: 'bit-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class UploaderFileComponent implements OnInit {
  currentFile: File;
  progressMsg: string;

  @Input()
  filesData: FileData[] = [];

  @Input()
  isProgress: boolean;

  @Input()
  isLoading: boolean;

  @Output()
  importFile: EventEmitter<File> = new EventEmitter();

  @Output()
  selectFile: EventEmitter<FileData> = new EventEmitter();

  @Output()
  deleteFile: EventEmitter<FileData> = new EventEmitter();

  @Output()
  refresh: EventEmitter<boolean> = new EventEmitter();

  @Output()
  execute: EventEmitter<FileData> = new EventEmitter();

  @Output()
  info: EventEmitter<FileData> = new EventEmitter();

  @Output()
  downloadFile: EventEmitter<FileData> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onUploadFile($event: any) {
    // drag and drop
    if (!$event.target) {
      console.log('drag and drop');
      this.currentFile = $event[0];
    } else { // Open file
      console.log('open file');
      this.currentFile = $event.target.files[0];
    }

    console.log(this.currentFile);

    this.progressMsg = "Cargando 1 elemento";
    this.importFile.emit(this.currentFile);


  }

  onSelectFile($event) {
    this.selectFile.emit($event);
  }

  onDeleteFile(file) {
    this.progressMsg = "Eliminando 1 elemento";
    this.deleteFile.emit(file);
  }

  onRefresh() {
    this.refresh.emit(true);
  }

  onExecute(file) {
    this.execute.emit(file);
  }

  onInfo(file) {
    this.info.emit(file);
  }

  // onDownloadFile(file) {
  //   this.downloadFile.emit(file);
  // }

  private validateFile(file: File): boolean {
    return true;
  }
}
