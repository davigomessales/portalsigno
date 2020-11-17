import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignoListaComponent } from './signo-lista.component';

describe('SignoListaComponent', () => {
  let component: SignoListaComponent;
  let fixture: ComponentFixture<SignoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
