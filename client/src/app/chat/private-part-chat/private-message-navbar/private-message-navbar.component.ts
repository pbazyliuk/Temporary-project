import { Component, OnInit } from '@angular/core';
import { MainPartChatService } from 'app/chat/main-part-chat/main-part-chat.service';

@Component({
  selector: 'ct-private-message-navbar',
  templateUrl: './private-message-navbar.component.html',
  styleUrls: ['./private-message-navbar.component.scss']
})

export class PrivateMessageNavbarComponent implements OnInit {

  public searchPrivateMessage = '';

  constructor(private MainPartChatService: MainPartChatService) { }

  onBlur(): void {
    this.searchPrivateMessage = '';
    this.MainPartChatService.setSearchMessage('');
    console.log(this.MainPartChatService.setSearchMessage(''));
  }

  onSearchPrivateMessageChange(value: string): void {
    this.MainPartChatService.setSearchMessage(value);
    console.log('onSearchPrivateMessageChange', value);
  }

  ngOnInit() {}
}
