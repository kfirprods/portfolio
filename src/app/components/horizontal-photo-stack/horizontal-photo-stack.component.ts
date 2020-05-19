import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-photo-stack',
  templateUrl: './horizontal-photo-stack.component.html',
  styleUrls: ['./horizontal-photo-stack.component.scss']
})
export class HorizontalPhotoStackComponent implements OnInit {
  @Input()
  photos: string[];

  @Input()
  interval: number;

  classes: string[];
  currentIndex = 0;

  constructor() {
    this.classes = new Array();
  }

  ngOnInit(): void {
    this.classes.push(...this.photos.map(photo => 'out'));

    this.updateCurrentPhotos();

    setInterval(() => {
      this.currentIndex++;
      this.updateCurrentPhotos();
    }, this.interval);
  }

  private updateCurrentPhotos(): void {
    for (let i = 0; i < this.classes.length; i++) {
      this.classes[i] = 'out';
    }

    this.classes[this.normalizeIndex(this.currentIndex)] = 'left';
    this.classes[this.normalizeIndex(this.currentIndex + 1)] = 'center';
    this.classes[this.normalizeIndex(this.currentIndex + 2)] = 'right';
    this.classes[this.normalizeIndex(this.currentIndex + 3)] = 'next';

    // TODO: Reset current index at some point
  }

  private normalizeIndex(index: number): number {
    return index % this.classes.length;
  }
}
