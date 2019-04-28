import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthPage } from './earth.page';

describe('EarthPage', () => {
  let component: EarthPage;
  let fixture: ComponentFixture<EarthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarthPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
