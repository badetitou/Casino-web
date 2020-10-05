import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelDataTransmissionService {

  private modelToShowSource = new Subject<any>();

  modelToShow$ = this.modelToShowSource.asObservable();

  sendModel(aModel) {
    this.modelToShowSource.next(aModel);
  }

}
