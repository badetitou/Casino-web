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

  public attributesOf(modelId: number, entityId: string): Observable<any> {
    return this.http.get<any>('/moose/v1/model/' + modelId + '/entity/' + entityId + '/attributes').pipe(first());
  }

  public sourceCode(modelId: number, entityId: string): Observable<any> {
    return this.http.get<any>('/moose/v1/model/' + modelId + '/entity/' + entityId + '/sourceCode').pipe(first());
  }

  public summary(modelId: number): Observable<any> {
    return this.http.get<any>('/moose/v1/model/' + modelId + '/summary').pipe(first());
  }

  public rootEntities(modelId: number): Observable<any> {
    return this.http.get<any>('/moose/v1/model/' + modelId + '/rootEntities').pipe(first());
  }

  public extensionsFor(modelId: number, entityId: string): Observable<[{name: string, canFollow: boolean, data: string}]> {
    return this.http.get<any>('/moose/v1/model/' + modelId + '/entity/' + entityId + '/extensions').pipe(first());
  }

}
