import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {
  count = 0;



  constructor() { }

  ngOnInit() {
    setInterval(() => {
      if (this.count === 5) {
        clearInterval();
      }
      else {
        this.count++;
      }
    }, 1000);
  }

}
