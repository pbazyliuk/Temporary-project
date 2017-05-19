import { Component, OnInit } from '@angular/core';
import { MainPartChatService } from "app/chat/main-part-chat/main-part-chat.service";

@Component({
  selector: 'ct-messages-navbar',
  templateUrl: './messages-navbar.component.html',
  styleUrls: ['./messages-navbar.component.css']
})
export class MessagesNavbarComponent implements OnInit {

  private searchMessage: string = '';
  
  constructor(private MainPartChatService: MainPartChatService) { }

  onBlur(): void {
    this.searchMessage = '';
    this.MainPartChatService.setSearchMessage('');
    console.log(this.MainPartChatService.setSearchMessage(''))
  }

  onSearchMessageChange(value: string): void {
    //this.service.setSearchValue(value);
    this.MainPartChatService.setSearchMessage(value);
    console.log('onSearchMessageChange', value)
  }


  ngOnInit() {
  }

}
