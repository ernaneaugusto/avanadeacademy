import { TestBed } from '@angular/core/testing';
import { SomaService } from './soma.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('SomaService', () => {
  let httpMock: HttpTestingController = null;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  beforeEach(() => {
    httpMock = TestBed.get(HttpTestingController);
  })

  it('should be created', () => {
    const service: SomaService = TestBed.get(SomaService);
    expect(service).toBeTruthy();
  });

  it('Funcao soma() deve retornar 5', () => {
    const service: SomaService = TestBed.get(SomaService);
    expect(service.soma(2, 3)).toBe(5);
  });
  
  it('Deve receber ToDos', () => {
    const service = TestBed.get(SomaService);
    const fakeData = [
      { title: "Title 1", description: "Descricao 1" },
      { title: "Title 2", description: "Descricao 2" }
    ]
    service.getToDos().subscribe(value => {
      console.log(value);
      expect(value.length).toBe(2);
      expect(value[0].data).toBeUndefined();
      expect(value[1].title).toBe("Title 2");
    });

    const req = httpMock.expectOne("http://localhost:3000");
    expect(req.request.method).toBe("GET");
    req.flush(fakeData);

  });
});
