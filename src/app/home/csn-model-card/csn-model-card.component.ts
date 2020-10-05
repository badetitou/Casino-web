import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelDataTransmissionService } from 'src/app/model-data-transmission.service';
import { ModelService } from '../services/model.service';

@Component({
  selector: 'csn-model-card',
  templateUrl: './csn-model-card.component.html',
  styleUrls: ['./csn-model-card.component.scss'],
  providers: [ ModelDataTransmissionService ]
})
export class CsnModelCardComponent implements OnInit {

  @Input()
  model: any;

  pages = 0;
  pageMetier = 0;
  widgets = 0;
  customs = 0;

  constructor(
    private modelService: ModelService,
    private router: Router,
    private modelDataTransmissionService: ModelDataTransmissionService ) {
  }

  ngOnInit() {
    this.modelService.subTypesOf(this.model.id, 'CSNPage').subscribe({
      next: (value) => this.pages = value.size,
      error: (err) => console.log(err),
      complete: () => console.log('Done for pages')
    });

    this.modelService.subTypesOf(this.model.id, 'CSNBusinessPage').subscribe({
      next: (value) => this.pageMetier = value.size,
      error: (err) => console.log(err),
      complete: () => console.log('Done for CSNBusinessPage')
    });

    this.modelService.subTypesOf(this.model.id, 'CSNWidget').subscribe({
      next: (value) => this.widgets = value.size,
      error: (err) => console.log(err),
      complete: () => console.log('Done for widgets')
    });

    this.modelService.subTypesOf(this.model.id, 'CSNUICustomWidget').subscribe({
      next: (value) => this.customs = value.size,
      error: (err) => console.log(err),
      complete: () => console.log('Done for custom widgets')
    });
  }

  navigateToModel(){
    this.modelDataTransmissionService.sendModel(this.model);
    this.router.navigate(['model']);
  }

}
