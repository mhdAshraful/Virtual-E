import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinoPage } from './dino.page';

describe('DinoPage', () => {
  let component: DinoPage;
  let fixture: ComponentFixture<DinoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
