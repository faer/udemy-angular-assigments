import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
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

  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  // newServerName = '';
  // newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  // onAddServer() {
  //   this.serverCreated.emit(new Element('server', this.newServerName, this.newServerContent));
  // }

  // onAddBlueprint() {
  //   this.blueprintCreated.emit(new Element('server', this.newServerName, this.newServerContent));
  // }

  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit(new Element('server', serverNameInput.value, this.serverContentInput.nativeElement.value));
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit(new Element('blueprint', serverNameInput.value, this.serverContentInput.nativeElement.value));
  }

}
