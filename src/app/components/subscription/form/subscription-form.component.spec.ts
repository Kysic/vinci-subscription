import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcriptionFormComponent } from './subscription-form.component';

describe('SubcriptionComponent', () => {
  let component: SubcriptionFormComponent;
  let fixture: ComponentFixture<SubcriptionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcriptionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcriptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
