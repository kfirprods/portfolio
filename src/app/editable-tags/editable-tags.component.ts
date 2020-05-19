import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-editable-tags',
  templateUrl: './editable-tags.component.html',
  styleUrls: ['./editable-tags.component.scss']
})
export class EditableTagsComponent implements OnInit {
  @Input()
  tags: string[];

  @Input()
  allowEdits: boolean;

  isEditing: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  applyTags(): void {
    this.isEditing = false;
  }

  editTags(): void {
    this.isEditing = true;
  }
}
