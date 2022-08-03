import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecommandeComponent } from './precommande.component';

describe('PrecommandeComponent', () => {
  let component: PrecommandeComponent;
  let fixture: ComponentFixture<PrecommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
