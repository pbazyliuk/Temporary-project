import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Login } from './login.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'app/store/application-state';
import { LoginSuccessActions } from 'app/store/actions';

@Component({
  selector: 'ct-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public user: Login = {
    email: '',
    password: ''
  };

  public storeConnection;

  constructor (
    private LoginService: LoginService,
    private router: Router,
    private zone: NgZone,
    private store: Store<ApplicationState>
  ) {
      this.storeConnection = store.subscribe (
        (state) => {
          console.log ('LoginComponent section received state', state);
        }
      );
  }

  signInSubmit (form: any) {
    this.user = {
      email: form.email,
      password: form.password,
    };

    console.log (this.user);

    this.LoginService
      .login (this.user)
        .subscribe (
          (userInfo) => {
            this.store.dispatch(
            new LoginSuccessActions(userInfo)
          );
          this.router.navigate(['chat']);
        },
        this.onLoginError
      );
   }

  onLoginError (err) {
    console.error(err);
    alert('User not found');
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.storeConnection.unsubscribe();
  }
}
