import { Component, Input, OnInit , ViewChild, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatHorizontalStepper, MatStepper } from '@angular/material/stepper';
import { ImportFileErrorDialogComponent } from './import-file-errorDialog.component';

export const enum STEPS {
  STEP0 = 1,
  STEP1 = 1,
  STEP2 = 2,
  STEP3 = 3,
  STEP4 = 4,
}

export interface JobData {
  id: string;
  fileId: string;
  fileName: string;
  step: STEPS;
  error?: number;
  status: string;
  progress: number;
  data?: {dataSource: string, error: []};
}
@Component({
  selector: 'bit-import-file',
  templateUrl: './import-file.component.html',
  styleUrls: ['./import-file.component.scss']
})
export class ImportFileComponent implements OnInit, AfterViewInit{
  private _jobData: JobData;

  progressValue: string;

  @ViewChild(MatHorizontalStepper) horizontalStepper: MatHorizontalStepper;
  @ViewChild('stepper') private stepper: MatStepper;
  
  @Input()
  set jobData(data: JobData) {
    console.log('stepData'); 
    console.log(data); 
    this._jobData = data;
    this.progressValue = `${this._jobData?.progress}%`;
    if (this._jobData) {
      this.clickButton(this._jobData.step, this.stepper);
    }
    
  }
  get jobData(): JobData {
    return this._jobData;
  }

  @Input()
  isLoading: boolean;
  
  @Output()
  importFile: EventEmitter<JobData> = new EventEmitter();

  constructor(private dialog: MatDialog) {}
  
  ngAfterViewInit(): void {
    // this.stepper.selectedIndex = this._jobData.step;
    // console.log(this.stepper.selectedIndex);
  }

  ngOnInit() {
    this._jobData = {
      id: '',
      fileId: '',
      fileName: '',
      step: 0,
      status: '',
      progress: 0
    }
  }

  clickButton(index: number, stepper: MatStepper) {
    if (stepper && index >0 && index <= 4) {
      stepper.selectedIndex = index - 1;
      console.log(this.horizontalStepper.steps);
          
      const a = this.horizontalStepper.steps.toArray();
      for (let i = 0; i < a.length; i++) {
        const element = a[i];
        console.log (element ) 
        if (i < index - 1) {
          element.completed= true;
        }  
        
      }
    }
  }

  onImportFile() {
    this.importFile.emit(this._jobData);
  }

  onReset() {
    this.stepper.reset();
  }

  getDataError() {
    const data = this._jobData.data;
    console.log(data);
    if (data) {
      return data.error.length === 0 ? false : true;
    }

    return false;
  }

  showErrors() {
    this.dialog.open(ImportFileErrorDialogComponent, {
      width      : '100%',
      maxWidth   : '400px',
      data: this._jobData.data?.error
    });

    // width      : '100%',
    // maxWidth   : '400px',
    // height     : 'auto',
    // hasBackdrop: true,
    // maxHeight  : '700px',
    // panelClass : ‘personal-details-dialog‘,
    // data       : {
    //     person: {
    //         name: ‘Simon’,
    //         age: 32,
    //     }
    // },    
  }

}
