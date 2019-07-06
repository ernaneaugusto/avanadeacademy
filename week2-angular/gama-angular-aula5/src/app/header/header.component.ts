import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  messageNumber = 0;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.select("messages").subscribe(value => {
      this.messageNumber = value.messages.length;
      console.log(this.messageNumber)
    })
  }

}
