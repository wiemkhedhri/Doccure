import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillepatientComponent } from './detaillepatient.component';

describe('DetaillepatientComponent', () => {
  let component: DetaillepatientComponent;
  let fixture: ComponentFixture<DetaillepatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaillepatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaillepatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
