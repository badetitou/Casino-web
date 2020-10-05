import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ModelDataTransmissionService } from '../model-data-transmission.service';

@Component({
  selector: 'csn-model-home',
  templateUrl: './model-home.component.html',
  styleUrls: ['./model-home.component.scss']
})
export class ModelHomeComponent implements OnInit {

  protected model;

  constructor(
      private route: ActivatedRoute,
      private modelDateTransmission: ModelDataTransmissionService
    ) {
      this.modelDateTransmission.modelToShow$.subscribe(
        model => {
          console.log(model);
          this.model = model;
        });
    }

  ngOnInit() {
  }

}
