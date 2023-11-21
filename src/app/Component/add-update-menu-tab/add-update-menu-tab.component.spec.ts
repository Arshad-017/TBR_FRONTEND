import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateMenuTabComponent } from './add-update-menu-tab.component';

describe('AddUpdateMenuTabComponent', () => {
  let component: AddUpdateMenuTabComponent;
  let fixture: ComponentFixture<AddUpdateMenuTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateMenuTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateMenuTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
