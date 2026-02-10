import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { Series } from '../../models/series.model';
import { MatSelectModule } from '@angular/material/select';
import { SeriesService } from '../../services/series.service';
import { MatIconModule } from '@angular/material/icon';
import { debounceTime, distinctUntilChanged, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-create-list-modal',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, TranslateModule, MatSelectModule, MatIconModule],
  templateUrl: './create-list-modal.component.html',
  styleUrl: './create-list-modal.component.css'
})

export class CreateListModalComponent implements OnChanges {

  series: Series[] = [];
  @Input() type?: string;
  @Output() close = new EventEmitter<void>();
  @Output() created = new EventEmitter<string>();

  constructor(
    private seriesService: SeriesService
  ) { }

  searchControl = new FormControl('');
  listForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  appendForm: FormGroup = new FormGroup({
    serieId: new FormControl('', [Validators.required]),
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['type'] && this.type === 'append') {
      this.setupSearch();
    }
  }

  private setupSearch() {
    this.searchControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => {
        return this.seriesService.getAll({ name: term || '' });
      })
    ).subscribe({
      next: (data) => {
        this.series = data;
      },
      error: (err) => {
        console.error('Error buscando series:', err);
      }
    });
  }
  onClose() {
    this.close.emit();
  }

  onSave() {
    if (this.listForm.valid) {
      const newName = this.listForm.get('name')?.value;
      this.created.emit(newName);
    }
  }

  onAppend() {
    if (this.appendForm.valid) {
      const serieId = this.appendForm.get('serieId')?.value;
      this.created.emit(serieId);
    }

  }
}
