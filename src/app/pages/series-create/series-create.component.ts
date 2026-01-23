import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { SeriesService } from '../../services/series.service';
import { Rating } from '../../enums/rating.enum';

@Component({
  selector: 'app-series-create',
  standalone: true,
  imports: [TranslateModule,CommonModule,ReactiveFormsModule],
  templateUrl: './series-create.component.html',
  styleUrl: './series-create.component.css'
})
export class SeriesCreateComponent implements OnInit {

  //Create genre service
  //Import genres
  

  constructor(
    private seriesService: SeriesService,
  ) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  seriesForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(200)]),
      rating: new FormControl<Rating | null>(null),
      imageUrl: new FormControl('', [Validators.maxLength(500)]),
      yearWatch: new FormControl<number | null>(null),
      description: new FormControl('', [Validators.maxLength(2000)]),
      genreIds: new FormControl<number[]|null>(null)
  });

}
