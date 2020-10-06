import { ChangeDetectorRef } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { CSNModelService } from 'src/app/services/csn-model.service';

@Component({
  selector: 'csn-code-viewer',
  templateUrl: './code-viewer.component.html',
  styleUrls: ['./code-viewer.component.scss']
})
export class CodeViewerComponent implements OnInit, OnChanges {

  @Input()
  public casinoEntity: any;
  @Input()
  public model: any;

  protected sourceCode = '';

  constructor(
    private csnModelService: CSNModelService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.updateSourceCode();
  }

  updateSourceCode() {
    this.csnModelService.source(this.model.id, this.casinoEntity['fm.id']).subscribe({
      next: (value) => this.sourceCode = value.body,
      error: (err) => console.log(err),
      complete: () => this.ref.detectChanges()
    });
  }

}
