import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
test: string;
  constructor() { }

  ngOnInit() {
  }
  
  onClick() {
    this.test = 'clciked';
    const te = Observable.create();
  }

}
