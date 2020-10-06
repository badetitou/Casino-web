import { Component, OnInit } from '@angular/core';
import APIMooseModelsJSON from './api/apiMooseModels.json';
import APIMooseModelJSON from './api/apiMooseModel.json';

@Component({
  selector: 'csn-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  protected apiMooseModels = APIMooseModelsJSON;
  protected apiMooseModel = APIMooseModelJSON;

  constructor() { }

  ngOnInit() {
  }

}
