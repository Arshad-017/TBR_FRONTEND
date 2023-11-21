import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteViewDetailsComponent } from './delete-view-details.component';

describe('DeleteViewDetailsComponent', () => {
  let component: DeleteViewDetailsComponent;
  let fixture: ComponentFixture<DeleteViewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteViewDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
