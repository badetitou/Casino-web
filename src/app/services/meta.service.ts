import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CSNMetaService {

  constructor(
    private http: HttpClient,
  ) { }

  public navigations(modelId: number): Observable<any> {
    return this.http.get<any>('/moose/v1/model/' + modelId + '/meta').pipe(first());
  }

}
