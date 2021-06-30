import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { NguCarouselModule } from '@ngu/carousel';


@NgModule({
  declarations: [SliderComponent],
  imports: [
    CommonModule,
    NguCarouselModule
  ],
  exports: [SliderComponent]
})
export class SliderModule { }
