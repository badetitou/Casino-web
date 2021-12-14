import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ModelService } from 'src/app/services/model.service';
import { AngularViewerComponent } from './angular-viewer/angular-viewer.component';


@Component({
  selector: 'csn-model-home-explorer',
  templateUrl: './model-home-explorer.component.html',
  styleUrls: ['./model-home-explorer.component.scss']
})
export class ModelHomeExplorerComponent implements OnInit {

  @Input()
  public model;

  public butterfly = { name: 'DependencyButterfly', canFollow: false, data: '' };
  public uml = { name: 'UML', canFollow: false, data: '' };
  public angularViewer = { name: AngularViewerComponent.codeName, canFollow: false, data: '' };

  selectedEntity: any;

  constructor(private modelService: ModelService, private ref: ChangeDetectorRef) {

  }

  ngOnInit() {
  }

  public inspectItem(event) {
    console.log('change selectedEntity');
    this.selectedEntity = event;
    this.modelService.extensionsFor(this.model.id, this.selectedEntity['fm.id']).subscribe({
      next: (value) => {
        this.butterfly = value.find(element => element.name === this.butterfly.name);
        this.uml = value.find(element => element.name === this.uml.name);
        this.angularViewer = value.find(element => element.name === this.angularViewer.name);
      },
      error: (err) => console.log(err),
      complete: () => this.ref.detectChanges()
    })
  }

}
