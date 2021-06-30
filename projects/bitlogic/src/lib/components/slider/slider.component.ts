import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

export interface SliderInfo {
  careerLevel: string;
  modality: string;
  assigment: string;
  careerName: string;
  subjectsApprove: string;
  credits: string;
  subjectsLabel: string;
  creditsLabel:string;
}

@Component({
  selector: 'bit-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  public carouselOne: NguCarouselConfig;
  @ViewChild('myCarousel') myCarousel: NguCarousel<any>;
  @Input() slideInfo: SliderInfo[]

  constructor() { }

  ngOnInit(): void {
  }
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    slide: 1,
    loop: true,
    touch: true,
    animation: 'lazy',
    velocity: 0.2,
    load: 3,
    point: {
      visible: true,
      hideOnSingleSlide: true
    }
  };
}
