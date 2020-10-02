import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {

  constructor(
    private http: HttpClient,
    ) { }

  public models(): Observable<any> {
    return this.http.get<any>('/moose/v1/models').pipe(first());
  }

}
