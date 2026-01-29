import { Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Subscription } from 'rxjs';
import { Genre } from '../models/genre.model';

@Pipe({
  name: 'genreNames',
  pure: false,
  standalone: true
})
export class GenreNamesPipe implements PipeTransform, OnDestroy {
  private lang: string;
  private sub: Subscription;

  constructor(private translate: TranslateService) {
    this.lang = this.translate.currentLang;
    this.sub = this.translate.onLangChange.subscribe((event) => {
      this.lang = event.lang;
    });
  }

  transform(ids: number[] | null | undefined, genres: Genre[] | null): string[] {
    if (!ids?.length || !genres?.length) return [];
    const isSpanish = this.lang === 'es';
    return genres
      .filter(g => ids.includes(g.id))
      .map(g => isSpanish ? g.name_es : g.name);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
