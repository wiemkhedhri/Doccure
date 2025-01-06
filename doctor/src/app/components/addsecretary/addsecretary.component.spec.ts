import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsecretaryComponent } from './addsecretary.component';

describe('AddsecretaryComponent', () => {
  let component: AddsecretaryComponent;
  let fixture: ComponentFixture<AddsecretaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsecretaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsecretaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
