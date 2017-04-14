import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // by default  // none css will be enable everywhere
})
export class ServerElementComponent implements OnInit {

  @Input('srvElement')
  element: Element;

  constructor() { }

  ngOnInit() {
  }

}
