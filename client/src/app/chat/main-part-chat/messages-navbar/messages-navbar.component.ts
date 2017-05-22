import { Component, OnInit } from '@angular/core';
import { MainPartChatService } from 'app/chat/main-part-chat/main-part-chat.service';

@Component({
  selector: 'ct-messages-navbar',
  templateUrl: './messages-navbar.component.html',
  styleUrls: ['./messages-navbar.component.scss']
})

export class MessagesNavbarComponent implements OnInit {

  public searchMessage = '';

  constructor(private MainPartChatService: MainPartChatService) {}

  onBlur(): void {
    this.searchMessage = '';
    this.MainPartChatService.setSearchMessage('');
    console.log(this.MainPartChatService.setSearchMessage(''));
  }

  onSearchMessageChange(value: string): void {
    this.MainPartChatService.setSearchMessage(value);
    console.log('onSearchMessageChange', value);
  }

  ngOnInit() {}
}
