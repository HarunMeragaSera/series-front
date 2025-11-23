import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';

export function HttpLoaderFactory(): TranslateLoader {
  const http = inject(HttpClient);
  return {
    getTranslation: (lang: string): Observable<any> =>
      http.get(`/assets/i18n/${lang}.json`)
  };
}
