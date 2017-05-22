import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'app/store/application-state';

@Component({
  selector: 'ct-chat-details',
  templateUrl: './chat-details.component.html',
  styleUrls: ['./chat-details.component.scss']
})
export class ChatDetailsComponent implements OnInit {

  constructor(private store: Store<ApplicationState>) {
    store.subscribe(
      state => console.log('message section received state', state)
    );
   }

  ngOnInit() {}
}
