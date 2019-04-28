import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KangarooPage } from './kangaroo.page';

describe('KangarooPage', () => {
  let component: KangarooPage;
  let fixture: ComponentFixture<KangarooPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KangarooPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KangarooPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
