import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsnModelCardComponent } from './csn-model-card.component';

describe('CsnModelCardComponent', () => {
  let component: CsnModelCardComponent;
  let fixture: ComponentFixture<CsnModelCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsnModelCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsnModelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
