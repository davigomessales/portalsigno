import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignoManterComponent } from './signo-manter.component';

describe('SignoManterComponent', () => {
  let component: SignoManterComponent;
  let fixture: ComponentFixture<SignoManterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignoManterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignoManterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
