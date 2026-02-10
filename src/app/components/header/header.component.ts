  import { Component } from '@angular/core';
  import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SwitchLanguageComponent } from '../switch-language/switch-language.component';
import { Router } from '@angular/router';

  @Component({
    selector: 'app-header',
    standalone: true,
    imports: [TranslateModule,SwitchLanguageComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
  })
  export class HeaderComponent {

    constructor (private translate: TranslateService,private router: Router) {}

    navigate() {
      this.router.navigate(['']);
    }

  }
