import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-photo-slide',
  templateUrl: './photo-slide.component.html',
  styleUrls: ['./photo-slide.component.scss'],
  animations: [
    trigger('photoLoaded', [
      state('start', style({
        width: '0px'
      })),
      state('end', style({
        width: '100%'
      })),
      transition('start => end', [animate('{{duration}}s')]),
    ])
  ]
})
export class PhotoSlideComponent implements OnInit {
  currentImage: string;
  isLoadingNextImage: boolean;
  @Input() images: string[];
  @Input() interval = 6;

  private currentImageIndex = 0;
  private timer: any;

  constructor() {
  }

  ngOnInit(): void {
    if (this.images && this.images.length > 0) {
      this.changeCurrentImage(this.images[0]);
    }

    this.setupTimer();
  }

  private setupTimer() {
    if (this.timer) {
      clearInterval(this.timer);
    }

    this.timer = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      this.changeCurrentImage(this.images[this.currentImageIndex]);
    }, this.interval * 1000);
  }

  changeCurrentImage(image: string) {
    this.isLoadingNextImage = true;
    this.currentImage = image;
    this.currentImageIndex = this.images.indexOf(image);

    this.setupTimer();
  }

  reanimate(event) {
    if (event.toState === 'start') {
      this.isLoadingNextImage = false;
    }
  }
}
