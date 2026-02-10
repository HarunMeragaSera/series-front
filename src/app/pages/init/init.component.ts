import { Component, inject } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './init.component.html',
  styleUrl: './init.component.css'
})
export class InitComponent {

  private router = inject(Router);

  goTo(path: string) {
    this.router.navigate([`/${path}`]);
  }

}
