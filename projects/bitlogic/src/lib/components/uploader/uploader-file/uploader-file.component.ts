import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IFile } from '../models/models';

@Component({
  selector: 'bit-uploader-file',
  templateUrl: './uploader-file.component.html',
  styleUrls: ['./uploader-file.component.scss']
})
export class UploaderFileComponent implements OnInit {

  currentFile: File;

  @Input()
  files: IFile[] = [];

  @Output()
  importFile: EventEmitter<File> = new EventEmitter();

  @Output()
  selectFile: EventEmitter<IFile> = new EventEmitter();

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
    // this.files.push( {name: this.currentFile.name, 
    //   size: this.currentFile.size, 
    //   date: this.currentFile.lastModified,  
    //   status: 'Subido' })

    this.importFile.emit(this.currentFile);


    // if (!event.target) {
    //   filesWereDragged = true;
    //   files = event;
    // }

    // this.loading = true;
    
    // // Check for multiple files

    // if (filesWereDragged) {
    //   if (files.length !== 1) {
    //     this.throwMultipleFilesError()
    //     return
    //   } else {
    //     const fileIsValid = this.validateFileExtension(files[0])
    //     if (!fileIsValid) {
    //       this.renderInvalidFileMessage()
    //       this.loading = false;
    //       return;
    //     } 
    //   }
    // }

    // this.fileToUpload = files.item(0);
   
  }

  // onDropHandler($event) {
  //   console.log('File(s) dropped');
  //   this.updateFile($event[0]);
  // }


  onDragOverHandler($event) {
    console.log('File(s) in drop zone');

    // Prevent default behavior (Prevent file from being opened)
    $event.preventDefault();
  }

  private validateFile(file: File): boolean {
    return true;
  }
}
