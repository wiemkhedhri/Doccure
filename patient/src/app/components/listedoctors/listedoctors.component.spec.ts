import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedoctorsComponent } from './listedoctors.component';

describe('ListedoctorsComponent', () => {
  let component: ListedoctorsComponent;
  let fixture: ComponentFixture<ListedoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListedoctorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListedoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
