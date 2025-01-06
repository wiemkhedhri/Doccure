import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossiermedicaleComponent } from './dossiermedicale.component';

describe('DossiermedicaleComponent', () => {
  let component: DossiermedicaleComponent;
  let fixture: ComponentFixture<DossiermedicaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DossiermedicaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DossiermedicaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
