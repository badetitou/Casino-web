import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs';

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
