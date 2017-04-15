import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // by default  // none css will be enable everywhere
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input('srvElement')
  element: Element;

  @Input()
  name: string;

  @ViewChild('heading') header: ElementRef;

  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('Text content of paragraph : ' + this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('ngDocheck Called');
    console.log('Text content : ' + this.header.nativeElement.textContent);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit Called');
    console.log('Text content of paragraph : ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit Called');
    console.log('Text content : ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy Called');
  }
}
