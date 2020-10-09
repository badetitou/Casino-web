import { Component, OnInit } from '@angular/core';
import { ToolbarService } from '../toolbar.service';


@Component({
  selector: 'csn-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private toolbarService: ToolbarService,
  ) { }

  ngOnInit() {
    this.toolbarService.changeTitle('About');
  }

}
