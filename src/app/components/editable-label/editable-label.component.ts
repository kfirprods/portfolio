import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editable-label',
  templateUrl: './editable-label.component.html',
  styleUrls: ['./editable-label.component.scss']
})
export class EditableLabelComponent implements OnInit {
  @Input()
  text: string;

  @Input()
  allowEdits: boolean;

  // TODO: Accept a whole config object to allow re-styling, 'allowsEdits', etc

  isEditing: boolean;

  editedText: string;

  @Output()
  applyClicked: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  startEdit(): void {
    this.editedText = this.text;
    this.isEditing = true;
  }

  applyEdit(): void {
    this.text = this.editedText;
    this.isEditing = false;

    this.applyClicked.emit(this.text);
  }

  cancelEdit(): void {
    this.isEditing = false;
  }
}
