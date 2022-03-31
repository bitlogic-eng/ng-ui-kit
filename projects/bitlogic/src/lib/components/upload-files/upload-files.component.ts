import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface FileData {
  id: string;
  name: string;
  size: number;
  date: number;
  status: string;
}

@Component({
  selector: 'bit-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss']
})
export class UploaderFileComponent implements OnInit {

  currentFile: File;

  @Input()
  filesData: FileData[] = [];

  @Input()
  isProgress: boolean;

  @Output()
  importFile: EventEmitter<File> = new EventEmitter();

  @Output()
  selectFile: EventEmitter<FileData> = new EventEmitter();

  @Output()
  deleteFile: EventEmitter<FileData> = new EventEmitter();

  constructor(private http: HttpClient) {
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

    this.importFile.emit(this.currentFile);


  }

  onSelectFile($event) {
    this.selectFile.emit($event);
  }

  onDeleteFile(id) {
    this.deleteFile.emit(id);
  }

  private validateFile(file: File): boolean {
    return true;
  }
}
