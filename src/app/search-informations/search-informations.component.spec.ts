import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInformationsComponent } from './search-informations.component';

describe('SearchInformationsComponent', () => {
  let component: SearchInformationsComponent;
  let fixture: ComponentFixture<SearchInformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchInformationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
