import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Injectable()
  export class MessageInputService {

    constructor(private http: Http) {}

    sendMessage(message) {
      console.log('MESSAGE INPUT SERVICE WORKING')
      return this.http.post('http://localhost:8090/api/messages', message).map(res => res.json());
    }

    getAllMessages() {
      return this.http.get('http://localhost:8090/api/messages').map(res => res.json());
    }
}
