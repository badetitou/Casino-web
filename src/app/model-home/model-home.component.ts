import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModelService } from '../services/model.service';
import { ToolbarService } from '../toolbar.service';

@Component({
  selector: 'csn-model-home',
  templateUrl: './model-home.component.html',
  styleUrls: ['./model-home.component.scss']
})
export class ModelHomeComponent implements OnInit {

  public model;
  state$: any;

  constructor(
    private route: ActivatedRoute,
    private modelService: ModelService,
    private toolbarService: ToolbarService,
  ) {
  }

  ngOnInit() {
    this.modelService.modelInfo(+this.route.snapshot.paramMap.get('id')).subscribe({
      next: (model) => {
        this.model = model;
        this.toolbarService.changeTitle(model.name);
      },
      error: (err) => console.log(err),
      complete: () => console.log('Model retrieved')
    });
  }

}
