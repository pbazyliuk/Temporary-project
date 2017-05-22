import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { WsService } from 'app/ws.service';
import { ApplicationState } from 'app/store/application-state';
import { MessageAddSuccessActions, GetAllMessagesSuccessActions } from 'app/store/actions';
import { MessageInputService } from 'app/chat/main-part-chat/message-input/message-input.service';
import { MainPartChatService } from 'app/chat/main-part-chat/main-part-chat.service';

@Component({
  selector: 'ct-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

export class ChatComponent implements OnInit, OnDestroy {

  public message;
  public connection;
  public isChatListFolded: boolean;
  public isChatMenuShown: boolean;

  constructor(private store: Store<ApplicationState>, private ws: WsService,
  private MessageInputService: MessageInputService,
  private MainPartChatService: MainPartChatService) {}

  onNotifyChatListFold(message: boolean): void {
    this.isChatListFolded = message;
  }

  onNotifyChatMenuShow(message: boolean): void {
    this.isChatMenuShown = message;
  }

  ngOnInit() {
    console.error('NGONINT CHAT MODULE');
    this.MainPartChatService.getData().subscribe(data => {
      console.log('MESSAGE on CHAT COMP', data);
        this.message = data;
      });
      if (this.connection) {
        this.connection = this.MainPartChatService.getConnection();
      } else {
        this.connection = this.ws.initWs()
        .subscribe(message => {
          this.store.dispatch(new MessageAddSuccessActions(message));
        });
      };
      this.MainPartChatService.updateConnection(this.connection);
    }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
