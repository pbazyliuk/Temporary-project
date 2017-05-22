import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { WsService } from 'app/ws.service';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'app/store/application-state';
import { MessageAddSuccessActions, GetAllMessagesSuccessActions } from 'app/store/actions';
import { Observable } from 'rxjs/Observable';
import { Message } from 'app/core/models/message';
import { MessageInputService } from 'app/chat/main-part-chat/message-input/message-input.service';
import { MainPartChatService } from 'app/chat/main-part-chat/main-part-chat.service';

@Component({
  selector: 'ct-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss']
})

export class MessageInputComponent implements OnInit, OnDestroy {
  public storeConnection;
  public messageText: string;
  public message: Message;
  public author: string;
  public authorId;

  @Output() notify: EventEmitter<object> = new EventEmitter<object>();

  constructor(
    private ws: WsService,
    private store: Store<ApplicationState>,
    private MessageInputService: MessageInputService,
    private MainPartChatService: MainPartChatService
  ) {
    this.storeConnection = store.subscribe(
      state => {
        console.log('Message Input Component section received state', state);
        this.authorId = state.uiState.user._id;
        this.author = state.uiState.user.firstname;
      });
    }

   sendMessage () {
     this.message = {
       userId: this.authorId,
       userName: this.author,
       timestamp: Date.now(),
       text: this.messageText
     };

    this.ws.sendMessage(this.message);
    this.MessageInputService.sendMessage(this.message)
      .subscribe(message => {
        console.error('API', message);
      });
    this.MainPartChatService.updateData(this.message);
    this.messageText = '';
  }

  ngOnInit() {
    this.MessageInputService.getAllMessages()
      .subscribe(messages => {
        console.error(messages);
        this.store.dispatch(new GetAllMessagesSuccessActions(messages));
      });
  }

  ngOnDestroy() {
    this.storeConnection.unsubscribe();
  }

}
