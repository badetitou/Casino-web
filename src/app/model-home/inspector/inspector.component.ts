import { ChangeDetectorRef, Component, Input, OnChanges } from '@angular/core';
import { CSNMetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'csn-inspector',
  templateUrl: './inspector.component.html',
  styleUrls: ['./inspector.component.scss']
})
export class InspectorComponent implements OnChanges {

  /**
   *   Groupe => {[ nom -> id ]}
   *   Element => {[ nom -> property name (depuis id) ]}
   * 
   *   navigations => 
   * {
   *  type: 'group' or 'entity'
   *  data: []
   * }
   * 
   * 2 services -> navigation from Group (by id) or from entity (by executing the property)
   * 
   */

  @Input()
  public model;

  listOfNavigations = [];
  cards = [];
  
  constructor(private csnMetaService: CSNMetaService,
    private cdr: ChangeDetectorRef) {
  }

  ngOnChanges() {
    this.csnMetaService.navigations(this.model.id).subscribe({
      next: (value: [{name, implementationName}]) => {
        console.log(value)
        this.listOfNavigations = value;
      },
      error: (err) => console.log('Error: ', err),
      complete: () => this.cdr.detectChanges()
    })
  }

  selectGroup(aType: string) {
    this.cards = []
    this.cards.push(aType)
  }

  selectEntity(anEntity: any) {
    this.cards.push('new group ' + anEntity)
  }

}
