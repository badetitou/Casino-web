import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'csn-api-element',
  templateUrl: './api-element.component.html',
  styleUrls: ['./api-element.component.scss']
})
export class ApiElementComponent implements OnInit {

  @Input()
  public api;

  displayedColumns: string[] = ['name', 'required', 'type', 'description'];

  constructor() { }

  ngOnInit() {
  }

}
