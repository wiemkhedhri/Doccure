import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PourcentageComponent } from './pourcentage.component';

describe('PourcentageComponent', () => {
  let component: PourcentageComponent;
  let fixture: ComponentFixture<PourcentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PourcentageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PourcentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
