import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { LoadChatListActions, LoadChatsListActions } from 'app/store/actions';
import { UserListService } from './chat/user-list/';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'app/store/application-state';
import { Http } from '@angular/http';
import { ChatListService } from 'app/chat/chat-list/chat-list.service';

@Injectable()
export class WsService {
  private url = 'http://localhost:8090';
  private socketRoot;
  private socketPrivateChat;
  private room;

  constructor(
    private userlistservice: UserListService,
    private store: Store<ApplicationState>,
    private http: Http,
    private ChatListService: ChatListService
  ) {}

  sendPrivateMessage(privateMessage, room) {
    this.socketPrivateChat.emit('add-private-message', privateMessage, room);
  }

  sendMessage(message) {
    console.log('WS is working');
    this.socketRoot.emit('add-message', message);
  }

  addChat(chat) {
     this.socketRoot.emit('add-chat', chat);
  }

 initWs() {
    const getAllUsers = this.userlistservice.getAllUsers();
    const store = this.store;
    const observable = new Observable(observer => {
    this.socketRoot = io(`${this.url}/root`);
    this.socketRoot.on('connect', function () {
    this.socketRoot
      .on('authenticated', function () {
          console.log('authenticated client');
      })
      .emit('authenticate', {token: localStorage.getItem('token')})
      .on('join', function (val) {
          console.log('join', val.user);
          getAllUsers
            .subscribe(
                allUserData => store.dispatch(
                new LoadChatListActions(allUserData)
                )
            );
      })
      .on('leave', function (val) {
          console.log('leave', val.user);
          getAllUsers
            .subscribe(
                allUserData => store.dispatch(
                    new LoadChatListActions(allUserData)
                )
            );
      })
      .on('message', (data) => {
          console.log('message', data);
          observer.next(data);
      })
      .on('chat', (data) => {
        console.log('chat123456', data);
        this.ChatListService.getAllChats()
        .subscribe(
          allChats => {
          this.store.dispatch(
            new LoadChatsListActions(allChats)
          );
            console.log('ALL CHATS MENU', allChats);
          }
        );
      });
  }.bind(this));
  return () => {
    this.socketRoot.disconnect();
  };
  });
    return observable;
  };

  initRoomWs(room) {
    this.room = room;
    const observable = new Observable(observer => {
      this.socketPrivateChat = io(`${this.url}/privatechat`);
      this.socketPrivateChat.on('connect', function () {
        console.log('user connection to room', room);
      this.socketPrivateChat.emit('room', room);
      this.socketPrivateChat.on('disconnect', function (val) {
        console.log('leave', val);
      });
      this.socketPrivateChat.on('add-private-message', function(data) {
        console.log('Incoming message:', data);
        observer.next(data);
      });
    }.bind(this));
    return () => {
      this.socketPrivateChat.disconnect();
    };
    });
  return observable;
  };
};
