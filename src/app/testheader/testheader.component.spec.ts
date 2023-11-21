import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestheaderComponent } from './testheader.component';

describe('TestheaderComponent', () => {
  let component: TestheaderComponent;
  let fixture: ComponentFixture<TestheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestheaderComponent]
    });
    fixture = TestBed.createComponent(TestheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
