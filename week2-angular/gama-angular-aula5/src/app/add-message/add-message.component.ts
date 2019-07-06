import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.scss']
})
export class AddMessageComponent implements OnInit {

  message: string = "";

  constructor(private store: Store<any>) { }

  enviar(){
    console.log("add-message")
    this.store.dispatch({
      type: "ADD_MESSAGE",
      payload: {
        id: Math.random(),
        text: this.message,
        created: new Date()
      }
    });
    this.message = "";
  }

  ngOnInit() {
  }

}
