import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VrviewPage } from './vrview.page';

describe('VrviewPage', () => {
  let component: VrviewPage;
  let fixture: ComponentFixture<VrviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VrviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
