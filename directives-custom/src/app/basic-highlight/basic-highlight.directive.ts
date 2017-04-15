import {Directive, ElementRef, OnInit} from '@angular/core';
/**
 * Created by Farouk Errahmani on 15/04/2017.
 */
@Directive({
  selector: '[appBasicHighLight]'
})
export class BasicHighLightDirective implements OnInit {

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
