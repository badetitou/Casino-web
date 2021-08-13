import { Component, Input, OnChanges } from '@angular/core';
import { CSNModelService } from 'src/app/services/csn-model.service';

@Component({
  selector: 'csn-model-home-overview',
  templateUrl: './model-home-overview.component.html',
  styleUrls: ['./model-home-overview.component.scss']
})
export class ModelHomeOverviewComponent implements OnChanges {

  @Input()
  public model;

  public modelSummary = {
    numberOfWidgets: 'wait',
    numberOfBusinessEntities: 'wait',
    numberOfServicesEntities: 'wait',
    numberOfActions: 'wait',
    numberOfAttributes: 'wait',
    numberOfLayouts: 'wait'
  };

  constructor(
    private csnModelService: CSNModelService
  ) { }

  ngOnChanges() {
    this.csnModelService.summary(this.model.id).subscribe({
      next: (summary) => this.modelSummary = summary,
      error: (err) => console.log(err),
      complete: () => console.log('Retrieve summary')
    });
  }

}
