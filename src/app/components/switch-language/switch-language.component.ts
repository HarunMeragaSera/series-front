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

}
