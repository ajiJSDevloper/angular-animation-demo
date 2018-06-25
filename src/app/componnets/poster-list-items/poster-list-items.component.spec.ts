import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterListItemsComponent } from './poster-list-items.component';

describe('PosterListItemsComponent', () => {
  let component: PosterListItemsComponent;
  let fixture: ComponentFixture<PosterListItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosterListItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
