import { Component, Input, OnInit , ElementRef, ViewChild, AfterViewInit, EventEmitter, Output } from '@angular/core';

import { MatHorizontalStepper, MatStepper } from '@angular/material/stepper';


export const enum STEPS {
  STEP0 = 1,
  STEP1 = 1,
  STEP2 = 2,
  STEP3 = 3,
  STEP4 = 4,
}

export interface StepData {
  step: STEPS;
  error?: number;
  status: string;
  data?: {
    progress: number;
  }
}

export interface ImportFileData {
  id: string,
  name: string
}

@Component({
  selector: 'bit-import-file',
  templateUrl: './import-file.component.html',
  styleUrls: ['./import-file.component.scss']
})
export class ImportFileComponent implements OnInit, AfterViewInit{
  // firstFormGroup: FormGroup;
  // secondFormGroup: FormGroup;
  // isEditable = false;

  private _stepData: StepData;

  progressValue: string;

  @ViewChild(MatHorizontalStepper) horizontalStepper: MatHorizontalStepper;
  @ViewChild('stepper') private stepper: MatStepper;
  
  @Input()
  importFileData: ImportFileData;

  @Input()
  set stepData(data: StepData) {
    console.log('stepData'); 
    console.log(data); 
    this._stepData = data;
    this.progressValue = `${this._stepData?.data?.progress}%`;
    this.clickButton(this._stepData.step, this.stepper);
  }
  get stepData(): StepData {
    return this._stepData;
  }
  
  @Output()
  importFile: EventEmitter<ImportFileData> = new EventEmitter();

  @Output()
  reset: EventEmitter<boolean> = new EventEmitter();

  
  // constructor(private _formBuilder: FormBuilder) {}
  constructor() {}
  
  ngAfterViewInit(): void {
    this.stepper.selectedIndex = this._stepData.step;
    console.log(this.stepper.selectedIndex);
  }

  ngOnInit() {
    // this.firstFormGroup = this._formBuilder.group({
    //   firstCtrl: ['', Validators.required]
    // });
    // this.secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });
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
    // for(const step of ) {
    //   console.log (step.completed ) 
    // }
  }

  onImportFile() {
    this.importFile.emit(this.importFileData);
  }

  onReset() {
    this._stepData = {
      step: 0,
      error: 0,
      status: '',
      data: {
        progress: 0
      }
    }
    // this.reset.emit(true);
    this.stepper.reset();
  }
}
