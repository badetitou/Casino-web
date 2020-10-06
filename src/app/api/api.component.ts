import { Component, OnInit } from '@angular/core';
import APIMooseModelsJSON from './api/apiMooseModels.json';
import APIMooseModelJSON from './api/apiMooseModel.json';
import APICasinoModelJSON from './api/apiCasinoModel.json';

@Component({
  selector: 'csn-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  protected apiMooseModels = APIMooseModelsJSON;
  protected apiMooseModel = APIMooseModelJSON;
  protected apiCasinoModel = APICasinoModelJSON;

  constructor() { }

  ngOnInit() {
  }

}
