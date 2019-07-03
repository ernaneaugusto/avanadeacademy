import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CepService } from '../cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.scss']
})
export class CepComponent implements OnInit {

  cep: any = {};
  params: any;

  constructor(private cepService: CepService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params.numero);
      this.params = params.numero;
    });

    this.cepService.getCep("12521280").subscribe(value => {
      console.log(value)
      this.cep = value;
    });
  }

}
