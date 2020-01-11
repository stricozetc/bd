import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWeldingComponent } from './add-welding.component';

describe('AddWeldingComponent', () => {
  let component: AddWeldingComponent;
  let fixture: ComponentFixture<AddWeldingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWeldingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWeldingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
