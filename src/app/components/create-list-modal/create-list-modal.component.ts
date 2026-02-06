import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-create-list-modal',
  standalone: true,
  imports: [ReactiveFormsModule,MatInputModule,MatFormFieldModule, TranslateModule],
  templateUrl: './create-list-modal.component.html',
  styleUrl: './create-list-modal.component.css'
})

export class CreateListModalComponent {

  @Output() close = new EventEmitter<void>();
  @Output() created = new EventEmitter<string>();

  listForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  onClose() {
    this.close.emit();
  }

  onSave() {
    if (this.listForm.valid) {
      const newName = this.listForm.get('name')?.value;
      this.created.emit(newName);
    }
  }
}
