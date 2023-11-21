import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateParentMatchesComponent } from './update-parent-matches.component';

describe('UpdateParentMatchesComponent', () => {
  let component: UpdateParentMatchesComponent;
  let fixture: ComponentFixture<UpdateParentMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateParentMatchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateParentMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
