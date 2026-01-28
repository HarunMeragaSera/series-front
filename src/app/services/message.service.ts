import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AppMessage, MessageType } from '../models/message.model';


@Injectable({ providedIn: 'root' })
export class MessageService {

  private messageSubject = new Subject<AppMessage>();
  messages$ = this.messageSubject.asObservable();

  show(type: MessageType, text: string) {
    this.messageSubject.next({ type, text });
  }

  success(text: string) {
    this.show('msg-success', text);
  }

  error(text: string) {
    this.show('msg-error', text);
  }

  info(text: string) {
    this.show('msg-info', text);
  }

  warning(text: string) {
    this.show('msg-warning', text);
  }
}
