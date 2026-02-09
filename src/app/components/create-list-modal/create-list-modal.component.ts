import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { Series } from '../../models/series.model';
import { MatSelectModule } from '@angular/material/select';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-create-list-modal',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, TranslateModule, MatSelectModule],
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


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['type']) {
      this.seriesService.getAll().subscribe(data => {
        this.series = data;
      });
    }
  }


  listForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  appendForm: FormGroup = new FormGroup({
    serieId: new FormControl('', [Validators.required]),
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

  onAppend() {
    if (this.appendForm.valid) {
      const serieId = this.appendForm.get('serieId')?.value;
      this.created.emit(serieId);
    }

  }
}
