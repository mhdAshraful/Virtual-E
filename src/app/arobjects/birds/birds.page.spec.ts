import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdsPage } from './birds.page';

describe('BirdsPage', () => {
  let component: BirdsPage;
  let fixture: ComponentFixture<BirdsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirdsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
