import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-register-dialog',
  standalone: true,
  imports: [FormsModule, ButtonModule, InputTextModule, PasswordModule],
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss']
})
export class RegisterDialogComponent {
  entreprise = '';
  password = '';

  constructor(public ref: DynamicDialogRef) {}

  closeDialog() {
    this.ref.close();
  }

  submitForm() {
    this.ref.close({ entreprise: this.entreprise, password: this.password });
  }
}
