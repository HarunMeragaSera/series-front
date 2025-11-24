import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'switch-language',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './switch-language.component.html',
  styleUrl: './switch-language.component.css'
})
export class SwitchLanguageComponent {

  constructor (private translate: TranslateService) {
    this.translate.use('es');
  }

  setLang(lang: string) {
    this.translate.use(lang);
  }

  get currentFlag(): string {
    const currentLang = this.translate.currentLang;
    switch (currentLang) {
      case 'es':
        return 'assets/flags/es.svg';
      case 'en':
        return 'assets/flags/en.svg';
      default:
        return 'assets/flags/es.svg';
    }
  }

}
