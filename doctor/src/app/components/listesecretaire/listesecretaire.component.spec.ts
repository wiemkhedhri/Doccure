import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesecretaireComponent } from './listesecretaire.component';

describe('ListesecretaireComponent', () => {
  let component: ListesecretaireComponent;
  let fixture: ComponentFixture<ListesecretaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListesecretaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesecretaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
