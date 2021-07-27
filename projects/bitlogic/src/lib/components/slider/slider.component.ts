import { Component, Input, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NguCarousel, NguCarouselConfig, NguCarouselStore} from '@ngu/carousel';

/**
 * The Slider Info
 * @interface SliderInfo
 */
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
export class SliderComponent implements AfterViewInit {
  /**
   * Is the Slider info
   */
  @Input() slideInfo: SliderInfo[];
  
  /**
   * Slide Move click handler
   */
  @Output() slideMove = new EventEmitter();
  
  /**
   * Banner click handler
   */
  @Output() slideClick = new EventEmitter();
  
  private currentSlide: SliderInfo;

  @ViewChild('myCarousel') myCarousel: NguCarousel<any>;
  
  carouselTileConfig: NguCarouselConfig = {
    grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
    slide: 1,
    speed: 600,
    interval: {timing: 4000},
    point: {
      visible: true
    },
    load: 2,
    touch: true,
    loop: true,
    custom: 'banner'
  };  

  constructor() {}

  ngAfterViewInit() {
    if (this.slideInfo.length !== 0) {
      this.currentSlide = this.slideInfo[0];
    }
    console.log(this.currentSlide);
  }

  onSlideMove(data: NguCarouselStore) {
    this.currentSlide = this.slideInfo[data.currentSlide]; 
    this.slideMove.emit(this.currentSlide);
  }

  onSlideClick() {
    this.slideClick.emit(this.currentSlide);
  }
}
