import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'csn-angular-viewer',
  templateUrl: './angular-viewer.component.html',
  styleUrls: ['./angular-viewer.component.scss']
})
export class AngularViewerComponent implements OnInit {

  @Input()
  public sourceCode = '';

  static codeName = 'Angular Viewer';

  constructor() { }

  ngOnInit(): void {
  }

}
