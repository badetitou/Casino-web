import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeViewerComponent } from './attribute-viewer.component';

describe('AttributeViewerComponent', () => {
  let component: AttributeViewerComponent;
  let fixture: ComponentFixture<AttributeViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
