import { CollectionViewer, SelectionChange } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Injectable } from '@angular/core';
import { BehaviorSubject, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DynamicDatabase } from './dynamic-database';
import { DynamicFlatNode } from './dynamic-flat-node';

@Injectable()
export class DynamicDataSource {

  dataChange: BehaviorSubject<DynamicFlatNode[]> = new BehaviorSubject<DynamicFlatNode[]>([]);

  get data(): DynamicFlatNode[] { return this.dataChange.value; }
  set data(value: DynamicFlatNode[]) {
    this.treeControl.dataNodes = value;
    this.dataChange.next(value);
  }

  constructor(
    private treeControl: FlatTreeControl<DynamicFlatNode>,
    private database: DynamicDatabase) { }

  connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]> {
    // tslint:disable-next-line: no-non-null-assertion
    this.treeControl.expansionModel.changed!.subscribe(change => {
      if ((change as SelectionChange<DynamicFlatNode>).added ||
        (change as SelectionChange<DynamicFlatNode>).removed) {
        this.handleTreeControl(change as SelectionChange<DynamicFlatNode>);
      }
    });

    return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
  }

  /** Handle expand/collapse behaviors */
  handleTreeControl(change: SelectionChange<DynamicFlatNode>) {
    if (change.added) {
      change.added.forEach((node) => this.toggleNode(node, true));
    }
    if (change.removed) {
      change.removed.reverse().forEach((node) => this.toggleNode(node, false));
    }
  }

  /**
   * Toggle the node, remove from display list
   */
  toggleNode(node: DynamicFlatNode, expand: boolean) {
    const index = this.data.indexOf(node);
    if (expand) {
      node.isLoading = true;
      this.database.getChildren(node.item).subscribe({
        next: (value) => {
          const children = value;
          if (!children || index < 0) { // If no children, or cannot find the node, no op
            return;
          }

          children.map(entity =>
            this.database.isExpandable(entity).subscribe({
              next: (bool) => {
                this.data.splice(index + 1, 0,
                  new DynamicFlatNode(entity, node.level + 1, bool));
              },
              error: (err) => console.log(err),
              complete: () => this.dataChange.next(this.data)
            }));

        },
        error: (err) => console.log(err),
        complete: () => node.isLoading = false
      });
    } else {

      const numberOfChildrenToRemove = this.data.findIndex((value, ind, obj) => {
        return (ind > index) && node.level >= value.level;
      }) - index - 1;
      this.data.splice(index + 1, numberOfChildrenToRemove); // TODO: This must be fixed
      this.dataChange.next(this.data);
    }
  }
}
