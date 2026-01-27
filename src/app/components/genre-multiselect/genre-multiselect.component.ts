import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Genre } from '../../models/genre.model';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-genre-multiselect',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  templateUrl: './genre-multiselect.component.html',
  styleUrl: './genre-multiselect.component.css'
})


export class GenreMultiselectComponent {

  @Input({ required: true }) genres: Genre[] = [];
  @Output() selectedIdsChange = new EventEmitter<number[]>();
  control = new FormControl<number[]>([]);

  constructor() {
    this.control.valueChanges.subscribe(value => {
    this.selectedIdsChange.emit(value ?? []);
    });
  }
}
