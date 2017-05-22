import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MainPartChatService } from 'app/chat/main-part-chat/main-part-chat.service';

@Component({
  selector: 'ct-chat-navbar',
  templateUrl: './chat-navbar.component.html',
  styleUrls: ['./chat-navbar.component.scss']
})
export class ChatNavbarComponent implements OnInit {

  @Output() notifyChatListFold: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() notifyChatMenuShow: EventEmitter<boolean> = new EventEmitter<boolean>();

  public isChatListFolded: boolean;
  public isChatMenuShown: boolean;
  public searchValue = '';
  public somevar;

  constructor(private MainPartChatService: MainPartChatService) {}

  onBlur(): void {
    this.searchValue = '';
    this.MainPartChatService.setSearchValue('');
  }

  onSearchValueChange(value: string): void {
    this.MainPartChatService.setSearchValue(value);
  }

  foldChatList() {
    this.isChatListFolded = !this.isChatListFolded;
    this.notifyChatListFold.emit(this.isChatListFolded);
  }

  showChatMenu() {
    this.isChatMenuShown = !this.isChatMenuShown;
    this.notifyChatMenuShow.emit(this.isChatMenuShown);
  }

  ngOnInit() {
    this.somevar = this.MainPartChatService.getIsMenuShown().subscribe(val => {
        if (val === false)  {
          this.showChatMenu();
        }
        console.log(val);
    });
  }
}
