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

  constructor(private modelService: ModelService) {
   }

  ngOnInit() {
  }

  protected inspectItem(event) {
    console.log(event);
  }

}
