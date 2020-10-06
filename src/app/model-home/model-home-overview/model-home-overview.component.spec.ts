import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelHomeOverviewComponent } from './model-home-overview.component';

describe('ModelHomeOverviewComponent', () => {
  let component: ModelHomeOverviewComponent;
  let fixture: ComponentFixture<ModelHomeOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelHomeOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelHomeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
