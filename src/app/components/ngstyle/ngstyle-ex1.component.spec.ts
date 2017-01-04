/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgStyleEx1Component } from './ngstyle-ex1.component';

describe('NgstyleEx1Component', () => {
  let component: NgStyleEx1Component;
  let fixture: ComponentFixture<NgStyleEx1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgStyleEx1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgStyleEx1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
