import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableLabelComponent } from './editable-label.component';

describe('TempComponent', () => {
  let component: EditableLabelComponent;
  let fixture: ComponentFixture<EditableLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditableLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableLabelComponent);
    component = fixture.componentInstance;
    component.allowEdits = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should match between text and editedText', () => {
    component.text = 'hello';
    component.startEdit();

    expect(component.editedText).toBe(component.text);
  });

  it ('should not change the text upon cancel', () => {
    component.text = 'hello';
    component.startEdit();
    component.editedText = 'not hello';
    component.cancelEdit();

    expect(component.text).toBe('hello');
  });

  it ('should change the text upon apply', () => {
    component.text = 'hello';
    component.startEdit();
    component.editedText = 'not hello';
    component.applyEdit();

    expect(component.text).toBe('not hello');
  });
});
