import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewArchiveComponent } from './view-archive.component';

describe('ViewArchiveComponent', () => {
  let component: ViewArchiveComponent;
  let fixture: ComponentFixture<ViewArchiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewArchiveComponent]
    });
    fixture = TestBed.createComponent(ViewArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
