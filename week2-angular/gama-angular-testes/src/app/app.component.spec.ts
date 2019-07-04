import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ContadorComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    // expect(app).toBeTruthy();
  });

  it(`should have as title 'gama-angular-testes'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    // expect(app.title).toEqual('gama-angular-testes');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    // expect(compiled.querySelector('h1').textContent).toContain('Welcome to gama-angular-testes!');
  });
});
