import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeendezvousComponent } from './listeendezvous.component';

describe('ListeendezvousComponent', () => {
  let component: ListeendezvousComponent;
  let fixture: ComponentFixture<ListeendezvousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeendezvousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeendezvousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
