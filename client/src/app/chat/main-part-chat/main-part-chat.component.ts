import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ct-main-part-chat',
  templateUrl: './main-part-chat.component.html',
  styleUrls: ['./main-part-chat.component.scss']
})
export class MainPartChatComponent implements OnInit {
  private message;
  constructor() { }

  // onNotify(message:object):void {
  //   this.message = message;
  //   console.log('MESSAGE IN CHAT COMP', this.message)
  // }

  ngOnInit() {
  }

}
