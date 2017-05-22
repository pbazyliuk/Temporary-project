import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../auth/shared';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'app/store/application-state';
import { LogoutSuccessActions } from 'app/store/actions';
import * as io from 'socket.io-client';
import { WsService } from 'app/ws.service';

@Component({
  selector: 'ct-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit, OnDestroy {

  public email = '';
  public firstname = '';
  public authenticated = false;

  constructor( private loginService: LoginService, private router: Router, private store: Store<ApplicationState>,
  private ws: WsService ) {
    this.store.subscribe(
      state => {
        console.log('Navbar Component section received state', state);
        if (state.uiState.user) {
          this.firstname = state.uiState.user.firstname;
          this.email = state.uiState.user.email;
          this.authenticated = state.uiState.authenticated;
        } else {
            this.authenticated = false;
            return;
          }
      }
    );
  }

  logoutAction() {
    this.loginService.logout();
    this.store.dispatch(
      new LogoutSuccessActions());
  }

  ngOnInit() {}

  ngOnDestroy() {}
}
