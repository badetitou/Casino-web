import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { title } from 'process';
import { Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export class MenuItem {
  title: string;
}


@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  activeMenuItem$: Subject<MenuItem>;

  constructor(private titleService: Title) {
    this.activeMenuItem$ = new Subject<MenuItem>();
  }

  public changeTitle(t: string) {
    this.activeMenuItem$.next({
      title: t
    });
    this.titleService.setTitle(t + ' - Casino');
  }

}
