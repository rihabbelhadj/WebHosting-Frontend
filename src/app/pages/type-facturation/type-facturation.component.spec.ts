import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeFacturationComponent } from './type-facturation.component';

describe('TypeFacturationComponent', () => {
  let component: TypeFacturationComponent;
  let fixture: ComponentFixture<TypeFacturationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeFacturationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeFacturationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
