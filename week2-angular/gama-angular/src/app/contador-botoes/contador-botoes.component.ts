import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-contador-botoes',
  templateUrl: './contador-botoes.component.html',
  styleUrls: ['./contador-botoes.component.scss']
})
export class ContadorBotoesComponent implements OnInit {

  constructor(public todoService: TodoService) { }

  ngOnInit() {

  }

}
