/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyCanActivateComponent } from './mycanactivate.component';

describe('MycanActivateComponent', () => {
  let component: MyCanActivateComponent;
  let fixture: ComponentFixture<MyCanActivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCanActivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCanActivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
