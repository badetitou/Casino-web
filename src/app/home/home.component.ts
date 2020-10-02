import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ModelsService } from './services/models.service';

@Component({
  selector: 'csn-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  models;

  constructor(private modelsService: ModelsService) {
    this.models = this.modelsService.models();
    // .subscribe({
    //   next: (value) => { this.models = value; },
    //   error: err => console.error(err),
    //   complete: () => console.log('DONE!')
    // });

  }
}
