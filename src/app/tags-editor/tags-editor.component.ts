import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tags-editor',
  templateUrl: './tags-editor.component.html',
  styleUrls: ['./tags-editor.component.scss']
})
export class TagsEditorComponent implements OnInit {
  @Input()
  tags: string[];

  constructor() { }

  ngOnInit(): void {
  }

  updateTags(): void {

  }
}
