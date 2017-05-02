import { Component, OnInit } from '@angular/core';

import { ThreadsService } from "app/core";
import { Store } from "@ngrx/store";
import { ApplicationState } from "app/store/application-state";
import { LoadUserThreadsAction } from "app/store/actions";
import { Observable } from "rxjs/Observable";
import * as _ from "lodash";
import { Thread } from "app/shared/model/thread";
import { ThreadSummaryVM } from "app/chat/chat-list/thread-section/thread-summary.vw";
import { mapStateToUserName } from "app/chat/chat-list/thread-section/mapStateToUserName";
import { mapStateToUnreadMessagesCounter } from "app/chat/chat-list/thread-section/mapStateToUnreadMessagesCounter";


@Component({
  selector: 'ct-thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css']
})
export class ThreadSectionComponent implements OnInit {

  userName$: Observable<string>;
  unreadMessagesCounter$: Observable<number>;
  threadSummaries$: Observable<ThreadSummaryVM[]>
 

  constructor(
    private threadService: ThreadsService,
    private store: Store<ApplicationState> 
    ) {

      this.userName$ = store
        .skip(1)
        .map(mapStateToUserName)
         

       this.unreadMessagesCounter$ = store
        .skip(1)
        .map(mapStateToUnreadMessagesCounter);

      this.threadSummaries$ = store
        .select(
          state => {
            const threads = _.values<Thread>(state.storeData.threads);

            return threads.map(
              thread => {

                const names = _.keys(thread.participants).map(
                  participantId => state.storeData.participants[participantId].name
                  );
                
                const lastMessageText = _.last(thread.messageIds);
                const lastMessage = state.storeData.messages[lastMessageText];

                return {
                  id: thread.id,
                  participantNames: _.join(names, ","),
                  lastMessageText: lastMessage.text,
                  timestamp: lastMessage.timestamp
                }
              }
            );
          }
        )
    }

  ngOnInit() {

    this.threadService.loadUserThreads()
      .subscribe(
        allUserData => this.store.dispatch(
          new LoadUserThreadsAction(allUserData)
        )
      );
  }
}
