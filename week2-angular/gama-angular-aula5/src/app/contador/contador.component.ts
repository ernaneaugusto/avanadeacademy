import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

  contador$: Observable<number>;

  constructor(private store: Store<number>) { }

  aumentar(){
    // this.contador$++;
    this.store.dispatch({
      type: "INCREMENT"
    })
  }
  diminuir(){
    // this.contador$--;
    this.store.dispatch({
      type: "DECREMENT"
    })
  }

  ngOnInit() {
    this.store.select("counter").subscribe(value => {
      this.contador$ = value;
    })
  }

}
