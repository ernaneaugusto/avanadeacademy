import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorComponent } from './contador.component';

describe('ContadorComponent', () => {
  let component: ContadorComponent;
  let fixture: ComponentFixture<ContadorComponent>;

  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadorComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('Clicar no botao aumentar 2x exibe o valor 2', () => {
    // expect(component).toBeTruthy();
    component.adicionarContador();
    component.adicionarContador();

    fixture.detectChanges();
    
    expect(element.querySelector("#counter").textContent).toBe("2");
  });
});
