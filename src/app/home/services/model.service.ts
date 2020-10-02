import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(
    private http: HttpClient,
  ) { }

  public subTypesOf(modelId: number, type: string): Observable<any> {
    return this.http.get<any>('/moose/v1/model/' + modelId + '/subTypesOf?type=' + type).pipe(first());
  }

}
