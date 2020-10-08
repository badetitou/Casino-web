import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ModelService } from '../services/model.service';

@Component({
  selector: 'csn-model-home',
  templateUrl: './model-home.component.html',
  styleUrls: ['./model-home.component.scss']
})
export class ModelHomeComponent implements OnInit {

  protected model;
  state$: any;

  constructor(
    private route: ActivatedRoute,
    private modelService: ModelService,
  ) {
  }

  ngOnInit() {
    this.modelService.modelInfo(+this.route.snapshot.paramMap.get('id')).subscribe({
      next: (model) => this.model = model,
      error: (err) => console.log(err),
      complete: () => console.log('Model retrieved')
    });
  }

}
