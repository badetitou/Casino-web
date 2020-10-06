import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CSNModelService {

  constructor(
    private http: HttpClient,
  ) { }

  public source(modelId: number, entityId: string): Observable<any> {
    return this.http.get<any>('/moose/v1/csn-model/' + modelId + '/entity/' + entityId + '/source').pipe(first());
  }

  public attributes(modelId: number, entityId: string): Observable<any> {
    return this.http.get<any>('/moose/v1/csn-model/' + modelId + '/entity/' + entityId + '/attributes').pipe(first());
  }

}
