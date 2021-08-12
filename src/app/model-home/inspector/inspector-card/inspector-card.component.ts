import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'csn-inspector-card',
  templateUrl: './inspector-card.component.html',
  styleUrls: ['./inspector-card.component.scss']
})
export class InspectorCardComponent implements OnInit {

  @Input() entity

  constructor() { }

  ngOnInit() {
  }

}
