import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoyotePage } from './coyote.page';

describe('CoyotePage', () => {
  let component: CoyotePage;
  let fixture: ComponentFixture<CoyotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoyotePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoyotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
