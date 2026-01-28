export type MessageType = 'msg-success' | 'msg-error' | 'msg-info' | 'msg-warning';


export interface AppMessage {
  type: MessageType;
  text: string;
}
