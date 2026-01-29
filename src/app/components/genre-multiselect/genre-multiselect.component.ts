import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
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


export class GenreMultiselectComponent implements OnChanges {

  @Input({ required: true }) genres: Genre[] = [];
  @Input({ required: false }) ids: number[] = [];
  @Output() selectedIdsChange = new EventEmitter<number[]>();

  control = new FormControl<number[]>([]);

  constructor(private translate: TranslateService) {
    this.control.valueChanges.subscribe(value => {
    this.selectedIdsChange.emit(value ?? []);
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ids'] && this.ids?.length) {
      this.control.setValue(this.ids, { emitEvent: true });
    }
  }

  getLanguage(): string {
    return this.translate.currentLang;
  }

}
