import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

  messages = [];

  constructor(private store: Store<any>) { }

  apagar(messageId){
    this.store.dispatch({
      type: "DELETE_MESSAGE",
      payload: messageId
    })
  }

  ngOnInit() {
    this.store.select("messages").subscribe(value => {
      console.log(value.messages);
      this.messages = value.messages;
    });
  }

}
