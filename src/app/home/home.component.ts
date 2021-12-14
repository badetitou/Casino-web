import { ChangeDetectorRef, Component } from '@angular/core';
import { ModelsService } from './services/models.service';
import { ToolbarService } from '../toolbar.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogImportComponent } from './dialog-import/dialog-import.component';

@Component({
  selector: 'csn-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  models;

  constructor(
    private modelsService: ModelsService,
    private toolbarService: ToolbarService,
    public dialog: MatDialog,
    private ref: ChangeDetectorRef
  ) {
    this.toolbarService.changeTitle('Home');
    this.models = this.modelsService.models();
    // .subscribe({
    //   next: (value) => { this.models = value; },
    //   error: err => console.error(err),
    //   complete: () => console.log('DONE!')
    // });

  }

  importModel() {
    const dialogRef = this.dialog.open(DialogImportComponent, {
      width: '250px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.models = this.modelsService.models();
      this.ref.detectChanges()
    });
  }

  update() {
    this.models = this.modelsService.models();
    this.ref.detectChanges()
  }

}
