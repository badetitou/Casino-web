import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'csn-uml',
  templateUrl: './uml.component.html',
  styleUrls: ['./uml.component.scss']
})
export class UmlComponent implements OnInit {

  @Input()
  public dataToShow: string;

  static codeName = 'UML';

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
