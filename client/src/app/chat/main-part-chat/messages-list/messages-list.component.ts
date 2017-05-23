import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'app/store/application-state';
import { Subscription } from 'rxjs/Subscription';
import { MainPartChatService } from 'app/chat/main-part-chat/main-part-chat.service';
import * as moment from 'moment';

@Component({
  selector: 'ct-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})

export class MessagesListComponent implements OnInit, OnDestroy {
  public messages$: Observable<object>;
  public author;
  public authenticated;
  public date = Date.now();
  

  public searchMessage = '';
  public subscriptions: Subscription[] = [];

  public usersOn1$: Observable<object>;

  constructor(
    private store: Store<ApplicationState>,
    private MainPartChatService: MainPartChatService
  ) {
    store.subscribe(state => {
      this.author = state.uiState.user.firstname;
    });

    this.messages$ = store
      .map(this.mapStatetoMessages);
    
    this.usersOn1$ = store
        .map(this.mapStatetoUsersOn);
  }

  mapStatetoUsersOn(state: ApplicationState) {
    // console.log('mapStatetoUsersOn', state.storeData.users);
    return state.storeData.users;
  }

  mapStatetoMessages(state: ApplicationState) {
    console.log('mapStatetoMessages', state.storeData.messages);
    state.storeData.messages.sort(function(a,b) {
      if(a.timestamp > b.timestamp) return 1;
      else return -1;
    });
    return state.storeData.messages;
  }

  ngOnInit() {
    this.subscriptions.push(this.MainPartChatService
      .getSearchMessage()
      .subscribe(value => this.searchMessage = value)
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.map(subscription => subscription.unsubscribe());
  }
}
