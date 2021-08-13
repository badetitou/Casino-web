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
    private modelService: ModelService,
    private casinoService: CSNModelService
  ) {
    this.modelService = modelService;
    this.modelId = modelId;
  }

  /** Initial data from database */
  initialData(): Observable<DynamicFlatNode[]> {
    return this.modelService.subTypesOf(this.modelId, 'CSNPage').pipe(map((pages) => {
      return pages.data.map(page => new DynamicFlatNode(page, 0, true));
    }));
  }


  getChildren(node: any): Observable<any> {
    return this.casinoService.subWidgets(this.modelId, node['fm.id']);
  }

  isExpandable(node: any): Observable<boolean> {
    return this.getChildren(node).pipe(map((value) => {
      return value.length !== 0;
    }));
  }
}
