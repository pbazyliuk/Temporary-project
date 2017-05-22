import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { ApplicationState } from 'app/store/application-state';
import { WsService } from 'app/ws.service';
import { MessageAddSuccessActions, PrivateMessageAddSuccessActions, UpdateCurrentChatSuccessActions } from 'app/store/actions';
import { MainPartChatService } from 'app/chat/main-part-chat/main-part-chat.service';

@Component({
  selector: 'ct-private-part-chat',
  templateUrl: './private-part-chat.component.html',
  styleUrls: ['./private-part-chat.component.scss']
})

export class PrivatePartChatComponent implements OnInit, OnDestroy {

  public chatname;
  public connectionRoom;
  public connection;
  public storeConnection;

  constructor(
    private route: ActivatedRoute,
    private store: Store<ApplicationState>,
    private ws: WsService,
    private MainPartChatService: MainPartChatService
  ) {
    this.storeConnection =  store.subscribe(state => {
      console.log('Private Part Chat Component section received state', state);
    });
 }

  initWsRoom() {
    console.log('initWsRoom working');
    this.connectionRoom = this.ws.initRoomWs(this.chatname)
      .subscribe(privateMessage => {
        console.log('privateMessage111', privateMessage);
        this.store.dispatch(new PrivateMessageAddSuccessActions(privateMessage));
      });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('params', params.id);
      this.chatname = params.id;
      this.MainPartChatService.updateChatname(this.chatname);
      if (this.connectionRoom) { this.connectionRoom.unsubscribe(); console.log('connectionRoom unsubscribe'); }
      this.initWsRoom();
      console.log('INIT PRIVATE CHAT');
      this.store.dispatch(new UpdateCurrentChatSuccessActions(this.chatname));
    });
  }

  ngOnDestroy() {
    this.connectionRoom.unsubscribe();
    this.storeConnection.unsubscribe();
  }
}
