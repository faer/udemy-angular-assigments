import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Element} from '../server-element/element.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output()
  serverCreated = new EventEmitter<Element>();

  @Output()
  blueprintCreated = new EventEmitter<Element>();

  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit(new Element('server', this.newServerName, this.newServerContent));
  }

  onAddBlueprint() {
    this.blueprintCreated.emit(new Element('blueprint', this.newServerName, this.newServerContent));
  }

}
