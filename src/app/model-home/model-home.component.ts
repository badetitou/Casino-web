import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'csn-model-home',
  templateUrl: './model-home.component.html',
  styleUrls: ['./model-home.component.scss']
})
export class ModelHomeComponent implements OnInit {

  protected model;
  state$: any;

  constructor(
    private location: Location,
  ) {
  }

  ngOnInit() {
    this.model = this.location.getState();
  }

}
