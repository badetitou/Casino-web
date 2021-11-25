import { Component, Input, OnChanges } from '@angular/core';
import { CSNModelService } from 'src/app/services/csn-model.service';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'csn-model-home-overview',
  templateUrl: './model-home-overview.component.html',
  styleUrls: ['./model-home-overview.component.scss']
})
export class ModelHomeOverviewComponent implements OnChanges {

  @Input()
  public model;

  public modelSummary = [
    {
      name: 'wait',
      value: 'wait'
    }
  ];

  constructor(
    private modelService: ModelService
  ) { }

  ngOnChanges() {
    this.modelService.summary(this.model.id).subscribe({
      next: (summary) => this.modelSummary = summary,
      error: (err) => console.log(err),
      complete: () => console.log('Retrieve summary')
    });
  }

}
