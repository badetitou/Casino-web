import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'csn-inspector-card',
  templateUrl: './inspector-card.component.html',
  styleUrls: ['./inspector-card.component.scss']
})
export class InspectorCardComponent implements OnInit {

  @Input() entity

  @Output()
  selectEntity = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(entity: any) {
    this.selectEntity.emit(entity);
  }

}
