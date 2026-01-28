import { Component, OnInit } from '@angular/core';
import { AppMessage } from '../../models/message.model';
import { MessageService } from '../../services/message.service';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent implements OnInit {

  message: AppMessage | null = null;
  timeoutId: any;

  constructor(private messageService: MessageService) { }


  ngOnInit() {
    this.messageService.messages$.subscribe(msg => {
      this.message = msg;


      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => {
        this.message = null;
      }, 3000);
    });
  }
}
