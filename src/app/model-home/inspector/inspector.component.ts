import { ChangeDetectorRef, Component, Input, OnChanges } from '@angular/core';
import { CSNMetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'csn-inspector',
  templateUrl: './inspector.component.html',
  styleUrls: ['./inspector.component.scss']
})
export class InspectorComponent implements OnChanges {

  @Input()
  public model;

  navigations = [];
  cards = [];
  
  constructor(private csnMetaService: CSNMetaService,
    private cdr: ChangeDetectorRef) {
  }

  ngOnChanges() {
    this.csnMetaService.navigations(this.model.id).subscribe({
      next: (value) => {
        this.navigations = value;
      },
      error: (err) => console.log(err),
      complete: () => this.cdr.detectChanges()
    })
  }

  selectGroup(aType: string) {
    this.cards = []
    this.cards.push(aType)
  }

}
