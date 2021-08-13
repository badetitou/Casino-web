import { Component, Input, OnInit } from '@angular/core';
import { ModelService } from 'src/app/services/model.service';


@Component({
  selector: 'csn-model-home-explorer',
  templateUrl: './model-home-explorer.component.html',
  styleUrls: ['./model-home-explorer.component.scss']
})
export class ModelHomeExplorerComponent implements OnInit {

  @Input()
  public model;

  selectedEntity: any;

  constructor(private modelService: ModelService) {
   }

  ngOnInit() {
  }

  public inspectItem(event) {
    console.log('change selectedEntity');
    this.selectedEntity = event;
  }

}
