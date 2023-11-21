import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchParentMatchesComponent } from './search-parent-matches.component';

describe('SearchParentMatchesComponent', () => {
  let component: SearchParentMatchesComponent;
  let fixture: ComponentFixture<SearchParentMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchParentMatchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchParentMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
