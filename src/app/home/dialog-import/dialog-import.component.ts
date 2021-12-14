import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModelHomeComponent } from 'src/app/model-home/model-home.component';
import { ModelsService } from '../services/models.service';

@Component({
  templateUrl: './dialog-import.component.html',
  styleUrls: ['./dialog-import.component.scss']
})
export class DialogImportComponent implements OnInit {

  public url: string
  public importing: boolean = false;

  constructor(public dialogRef: MatDialogRef<DialogImportComponent>, 
    private modelsService: ModelsService) { }

  ngOnInit(): void {
  }

  import() {
    console.log(this.url);
    this.importing = true
    this.modelsService.import(this.url).subscribe({
      next: () => console.log('Imported'),
      error: () => console.error('Model import fail'),
      complete: () => this.dialogRef.close()
    });
    
  }

}
