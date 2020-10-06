import { AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges } from '@angular/core';
import { CSNModelService } from 'src/app/services/csn-model.service';

@Component({
  selector: 'csn-attribute-viewer',
  templateUrl: './attribute-viewer.component.html',
  styleUrls: ['./attribute-viewer.component.scss']
})
export class AttributeViewerComponent implements OnChanges  {

  @Input()
  public casinoEntity: any;
  @Input()
  public model: any;

  displayedColumns: string[] = ['key', 'value'];
  protected attributes = [];

  constructor(
    private csnModelService: CSNModelService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnChanges() {
    this.updateAttributes();
  }

  private updateAttributes() {
    this.csnModelService.attributes(this.model.id, this.casinoEntity['fm.id']).subscribe({
      next: (values) => this.attributes = values,
      error: (err) => {
        console.log(err);
        this.attributes = [];
      },
      complete: () => console.log('Load attributes complete')
    });
    this.ref.detectChanges();
  }

}
