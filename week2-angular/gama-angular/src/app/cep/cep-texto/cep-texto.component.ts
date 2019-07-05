import { Component, OnInit } from '@angular/core';
import { CepService } from '../cep.service';

@Component({
  selector: 'app-cep-texto',
  templateUrl: './cep-texto.component.html',
  styleUrls: ['./cep-texto.component.scss']
})
export class CepTextoComponent implements OnInit {

  cep: any = {};
  cepTexto: any;

  constructor(private cepService: CepService) { }

  buscarCep(){
    this.cepService.getCep(this.cepTexto).subscribe(value => {
      this.cep = value;
    })
  }

  ngOnInit() {
  }

}
