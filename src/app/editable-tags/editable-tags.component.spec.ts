import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableTagsComponent } from './editable-tags.component';

describe('EditableTagsComponent', () => {
  let component: EditableTagsComponent;
  let fixture: ComponentFixture<EditableTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditableTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
