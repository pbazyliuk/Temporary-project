import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Message } from 'app/core/models/message';
import { WsService } from 'app/ws.service';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'app/store/application-state';
import { MessageInputService } from 'app/chat/main-part-chat/message-input/message-input.service';
import { MainPartChatService } from 'app/chat/main-part-chat/main-part-chat.service';
import { PrivateMessageInputService } from 'app/chat/private-part-chat/private-message-input/private-message-input.service';
import { GetAllPrivateMessagesSuccessActions } from 'app/store/actions';

@Component({
  selector: 'ct-private-message-input',
  templateUrl: './private-message-input.component.html',
  styleUrls: ['./private-message-input.component.scss']
})
export class PrivateMessageInputComponent implements OnInit, OnDestroy {

  public storeConnection;
  public messageText;
  public privateMessage: Message;
  public author;
  public authorId;

  @Input() chatname: string;

  constructor(
     private ws: WsService,
     private store: Store<ApplicationState>,
     private PrivateMessageInputService: PrivateMessageInputService,
     private MainPartChatService: MainPartChatService
  ) {
    this.storeConnection = store.subscribe(
      state => {
        console.log('Private Message Input Component received state', state);
        this.authorId = state.uiState.user._id;
        this.author = state.uiState.user.firstname;
      });
   }

  sendPrivateMessage () {
    this.privateMessage = {
      userId: this.authorId,
      userName: this.author,
      timestamp: Date.now(),
      text: this.messageText
    };
    console.log('Private message', this.privateMessage);
    console.log(this.chatname);
    this.ws.sendPrivateMessage(this.privateMessage, this.chatname);
    this.PrivateMessageInputService.sendPrivateMessage(this.privateMessage, this.chatname)
      .subscribe(privateChatMessages => {
        console.error('API CHATNAME MESSAGES', privateChatMessages);
      });
    this.MainPartChatService.updateData(this.privateMessage);
    this.messageText = '';
    }

  ngOnInit() {
    this.PrivateMessageInputService.getAllMessagesFromPrivateChat(this.chatname)
      .subscribe(privateMessages => {
        console.error('Private Chat messages', privateMessages);
        this.store.dispatch(new GetAllPrivateMessagesSuccessActions(privateMessages));
      });
  }

  ngOnDestroy() {
    this.storeConnection.unsubscribe();
  }
}
