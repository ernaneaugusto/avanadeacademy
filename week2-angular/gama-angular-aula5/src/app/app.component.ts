import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gama-angular-aula5';
  contador$: Observable<number>;

  constructor(private store: Store<number>){}

  ngOnInit(){
    this.contador$ = this.store.select("counter");
  }
}
