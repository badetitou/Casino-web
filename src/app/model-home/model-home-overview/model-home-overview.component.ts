import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'csn-model-home-overview',
  templateUrl: './model-home-overview.component.html',
  styleUrls: ['./model-home-overview.component.scss']
})
export class ModelHomeOverviewComponent implements OnInit {

  @Input()
  public model;

  constructor() { }

  ngOnInit() {
  }

}
