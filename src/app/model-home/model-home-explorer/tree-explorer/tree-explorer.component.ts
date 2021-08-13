import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FlatTreeControl } from '@angular/cdk/tree';
import { DynamicFlatNode } from './dynamic-flat-node';
import { DynamicDataSource } from './dynamic-datasource';
import { DynamicDatabase } from './dynamic-database';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'csn-tree-explorer',
  templateUrl: './tree-explorer.component.html',
  styleUrls: ['./tree-explorer.component.scss']
})
export class TreeExplorerComponent implements OnInit {

  @Input()
  public model;

  @Output()
  itemSelected = new EventEmitter();

  treeControl: FlatTreeControl<DynamicFlatNode>;

  dataSource: DynamicDataSource;

  getLevel = (node: DynamicFlatNode) => node.level;

  isExpandable = (node: DynamicFlatNode) => node.expandable;

  hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;

  constructor(private modelService: ModelService) {
   }

  ngOnInit() {
    console.log(this.model);
    const database = new DynamicDatabase(this.model.id, this.modelService);
    this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new DynamicDataSource(this.treeControl, database);

    database.initialData().subscribe({
      next: (values) => this.dataSource.data = values,
      error: (err) => console.log(err),
      complete: () => console.log('Initial Data Complete')
    });
  }

  public selectItem(item: any) {
    this.itemSelected.emit(item);
  }

}
