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

  public modelInfo(modelId: number): Observable<any> {
    return this.http.get<any>('/moose/v1/model/' + modelId).pipe(first());
  }

  public subTypesOf(modelId: number, type: string): Observable<any> {
    return this.http.get<any>('/moose/v1/model/' + modelId + '/subTypesOf?type=' + type).pipe(first());
  }

  public entity(modelId: number, entityId: string): Observable<any> {
    return this.http.get<any>('/moose/v1/model/' + modelId + '/entity/' + entityId).pipe(first());
  }

  public childrenOf(modelId: number, entityId: string): Observable<any> {
    return this.http.get<any>('/moose/v1/model/' + modelId + '/entity/' + entityId + '/children').pipe(first());
  }

  public summary(modelId: number): Observable<any> {
    return this.http.get<any>('/moose/v1/model/' + modelId + '/summary').pipe(first());
  }

}
