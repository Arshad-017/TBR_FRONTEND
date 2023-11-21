import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateViewDetailsComponent } from './update-view-details.component';

describe('UpdateViewDetailsComponent', () => {
  let component: UpdateViewDetailsComponent;
  let fixture: ComponentFixture<UpdateViewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateViewDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
