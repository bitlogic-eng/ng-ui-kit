import { Component, Input, OnInit , ElementRef, ViewChild, AfterViewInit, EventEmitter, Output } from '@angular/core';

import { MatHorizontalStepper, MatStepper } from '@angular/material/stepper';


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
  data?: any;
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
  isLoading: boolean = false;
  
  @Output()
  importFile: EventEmitter<JobData> = new EventEmitter();

  constructor() {}
  
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
}
