import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Forest3dPage } from './forest3d.page';

describe('Forest3dPage', () => {
  let component: Forest3dPage;
  let fixture: ComponentFixture<Forest3dPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forest3dPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Forest3dPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
