import { BoolPipe } from './bool.pipe';

describe('BoolPipe', () => {
  it('create an instance', () => {
    const pipe = new BoolPipe();
    expect(pipe).toBeTruthy();
  });
  
  it('Deve retornar Sim se valor nao for FALSE', () => {
    const pipe = new BoolPipe();
    expect(pipe.transform(false)).not.toBe("Sim");
  });
  
  it('Deve retornar Sim se valor nao for TRUE', () => {
    const pipe = new BoolPipe();
    expect(pipe.transform(true)).toBe("Sim");
  });


});
