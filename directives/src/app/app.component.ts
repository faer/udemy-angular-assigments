import { Component } from '@angular/core';
import {falseIfMissing} from "protractor/built/util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  counter = 0;
  toggle = false;
  logs = [];

  onDisplayDetails() {
    this.toggle = !this.toggle;
    // this.logs.push(++this.counter);
    this.logs.push(this.logs.length + 1 );
  }

}
