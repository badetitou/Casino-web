import { Component, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'csn-dependency-butterfly',
  templateUrl: './dependency-butterfly.component.html',
  styleUrls: ['./dependency-butterfly.component.scss']
})
export class DependencyButterflyComponent implements OnChanges  {

  @Input()
  public dataToShow: string;

  static codeName = 'DependencyButterfly';

  constructor(public sanitizer: DomSanitizer) { }

  ngOnChanges() {}

}
