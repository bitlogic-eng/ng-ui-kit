import { Component, Input, OnInit , ElementRef, ViewChild, AfterViewInit } from '@angular/core';
// import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { IStepData } from '../models/models';
import { MatHorizontalStepper, MatStepper } from '@angular/material/stepper';


@Component({
  selector: 'bit-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit, AfterViewInit{
  // firstFormGroup: FormGroup;
  // secondFormGroup: FormGroup;
  // isEditable = false;

  _stepData: IStepData;

  progressValue: string;

  @ViewChild(MatHorizontalStepper) horizontalStepper: MatHorizontalStepper;
  @ViewChild('stepper') private stepper: MatStepper;
  
  @Input()
  set stepData(data: IStepData) {
    console.log('stepData'); 
    console.log(data); 
    this._stepData = data;
    this.progressValue = `${this._stepData?.data?.progress}%`;
  }
  get stepData(): IStepData {
    return this._stepData;
  }
  

  
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
    // for(const step of ) {
    //   console.log (step.completed ) 
    // }
  }
}
