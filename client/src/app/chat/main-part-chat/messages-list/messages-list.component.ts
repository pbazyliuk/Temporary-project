import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'app/store/application-state';
import { Subscription } from 'rxjs/Subscription';
import { MainPartChatService } from 'app/chat/main-part-chat/main-part-chat.service';

@Component({
  selector: 'ct-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})

export class MessagesListComponent implements OnInit, OnDestroy {
  public messages$: Observable<object>;
  public author;
  public authenticated;
  

  public searchMessage = '';
  public subscriptions: Subscription[] = [];

  public usersOn111$: Observable<object>;

  constructor(
    private store: Store<ApplicationState>,
    private MainPartChatService: MainPartChatService
  ) {
    store.subscribe(state => {
      this.author = state.uiState.user.firstname;
    });

    this.messages$ = store
      .map(this.mapStatetoMessages);
    
    this.usersOn111$ = store
        .map(this.mapStatetoUsersOn);
  }

  mapStatetoUsersOn(state: ApplicationState) {
    // console.log('mapStatetoUsersOn', state.storeData.users);
    return state.storeData.users;
  }

  mapStatetoMessages(state: ApplicationState) {
    console.log('mapStatetoMessages', state.storeData.messages);
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
