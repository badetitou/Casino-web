import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'csn-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input()
  entity: any

  constructor() { }

  ngOnInit(): void {
  }

}
