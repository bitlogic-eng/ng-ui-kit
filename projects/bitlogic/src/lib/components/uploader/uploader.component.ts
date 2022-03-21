import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IStepData } from './models/models';

export enum STATUS {
  FILE_INITAL = 0,
  FILE_LIST = 1,
  FILE_IMPORT = 2,
  FILE_ANALYSIS = 3,
  FILE_SUMMIT = 4
}

// interface IUploaderData {
//   status: STATUS;
//   data: any;
// }

@Component({
  selector: 'bit-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {

  @Input()
  status: number = STATUS.FILE_INITAL;

  @Input()
  inputData;

  @Input()
  progress: boolean = false;

  @Input()
  stepData: IStepData;

  @Output()
  outputData: EventEmitter<any> = new EventEmitter();


  constructor() { 
  }

  ngOnInit(): void {
  }

  next(status) {
    this.status = status ;
  }

  onImportFile($event) {
    this.outputData.emit($event);
  }
}
