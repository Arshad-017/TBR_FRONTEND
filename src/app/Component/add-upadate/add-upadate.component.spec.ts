import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpadateComponent } from './add-upadate.component';

describe('AddUpadateComponent', () => {
  let component: AddUpadateComponent;
  let fixture: ComponentFixture<AddUpadateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpadateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpadateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
