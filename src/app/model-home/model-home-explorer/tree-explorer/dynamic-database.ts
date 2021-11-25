import { Inject, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CSNModelService } from 'src/app/services/csn-model.service';
import { ModelService } from 'src/app/services/model.service';
import { DynamicFlatNode } from './dynamic-flat-node';

export class DynamicDatabase {

  rootLevelNodes = [];

  modelId: number;
  
  constructor(
    modelId: number,
    private modelService: ModelService
  ) {
    this.modelService = modelService;
    this.modelId = modelId;
  }

  /** Initial data from database */
  initialData(): Observable<DynamicFlatNode[]> {
    return this.modelService.rootEntities(this.modelId).pipe(map((entities) => {
      return entities.map(entity => new DynamicFlatNode(entity, 0, true));
    }));
  }


  getChildren(node: any): Observable<any> {
    return this.modelService.childrenOf(this.modelId, node['fm.id']);
  }

  isExpandable(node: any): Observable<boolean> {
    return this.getChildren(node).pipe(map((value) => {
      return value.length !== 0;
    }));
  }
}
