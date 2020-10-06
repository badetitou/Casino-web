import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'csn-api-group',
  templateUrl: './api-group.component.html',
  styleUrls: ['./api-group.component.scss']
})
export class ApiGroupComponent implements OnInit {

  @Input()
  protected apiList: any;

  constructor() { }

  ngOnInit() {
  }

}
