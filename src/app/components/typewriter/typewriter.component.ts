import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import Typewriter from 't-writer.js';
import TypewriterText from './typewriter-text.type';


@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.scss']
})
export class TypewriterComponent implements AfterViewInit {
  @Input()
  texts: TypewriterText[];

  @Input()
  caretColor: string;

  @ViewChildren('tw')
  typewriterElements: QueryList<ElementRef>;

  constructor() { }

  ngAfterViewInit(): void {
    const options = {
      loop: false,
      typeSpeed: 'random',
      typeSpeedMin: 50,
      typeSpeedMax: 80,
      typeColor: 'inherit',
      cursorColor: this.caretColor
    };

    const writers: Typewriter[] = this.typewriterElements.map<Typewriter>(element => new Typewriter(element.nativeElement, options));

    for (let i = 0; i < this.texts.length; i++) {
      writers[i].type(this.texts[i].text);

      if (i < this.texts.length - 1) {
        writers[i].removeCursor();
        writers[i].then(writers[i + 1].start.bind(writers[i + 1]));
      }
    }

    writers[0].start();
  }
}
