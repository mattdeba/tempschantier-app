import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, PanelModule],
  providers: [DialogService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tempschantier-app';
  dialogRef: DynamicDialogRef | undefined;

  constructor(private dialogService: DialogService) {}

  showRegisterDialog() {
    this.dialogRef = this.dialogService.open(RegisterDialogComponent, {
      header: 'Inscription',
      width: '400px',
      closable: false,
      data: {}
    });

    this.dialogRef.onClose.subscribe((data) => {
      if (data) {
        console.log('Dialog closed with data:', data);
      }
    });
  }
}
