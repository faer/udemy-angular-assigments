import { Component } from '@angular/core';
import { Element } from './server-element/element.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: Element[] = [];

  constructor() {
    this.serverElements.push(
      new Element('server', 'Testserver', 'just a test!')
    );
  }

  onServerAdded(eventData: Element) {
    this.serverElements.push(eventData);
  }

  onBlueprintAdded(eventData: Element) {
    this.serverElements.push(eventData);
  }

}
