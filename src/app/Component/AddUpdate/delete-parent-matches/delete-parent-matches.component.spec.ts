import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteParentMatchesComponent } from './delete-parent-matches.component';

describe('DeleteParentMatchesComponent', () => {
  let component: DeleteParentMatchesComponent;
  let fixture: ComponentFixture<DeleteParentMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteParentMatchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteParentMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
