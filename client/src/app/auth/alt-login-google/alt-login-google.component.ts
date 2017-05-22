import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'app/auth/shared';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'app/store/application-state';
import { RegisterSuccessActions, LoginSuccessActions } from 'app/store/actions';

declare const gapi: any;

@Component ({
  selector: 'ct-alt-login-google',
  templateUrl: './alt-login-google.component.html',
  styleUrls: ['./alt-login-google.component.scss']
})
export class AltLoginGoogleComponent implements OnInit {

  public profile;
  public userData;

  constructor (
    private zone: NgZone,
    private router: Router,
    private loginservice: LoginService,
    private store: Store<ApplicationState>
  ) { }

  submitBy() {
     gapi.load('auth2', () => {
      const auth2 = gapi.auth2.init({
        client_id: '691780650143-enoue9ml105j5vq536t8tp0og195sas5.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin'
      });
      auth2.attachClickHandler(
        document.getElementById('google-auth-btn'), {},
        this.onSuccess.bind(this),
        this.onFailure
      );
    });
  }

  onFailure() {
    alert('Something goes wrong with Social Authorization');
  }

  onSuccess(user): void {
    this.zone.run (() => {
      this.profile = user.getBasicProfile();
      this.userData = {
        firstname: this.profile.ofa,
        lastname: this.profile.wea,
        email: this.profile.U3,
        password: this.profile.Eea
      };

      this.loginservice.register (this.userData)
      .subscribe(userInfo => {
        this.store.dispatch (
        new RegisterSuccessActions(userInfo)
      );

      this.router.navigate(['chat']);
    },
    this.onRegisterError.bind(this));
    });
  }
  onRegisterError(err) {
    if (err.status === 422) {
      const loginData = {
        email: this.userData.email,
        password: this.userData.password
      };

    this.loginservice
      .login(loginData)
        .subscribe (
          userInfo => {
            this.store.dispatch (
              new LoginSuccessActions(userInfo)
          );
          this.router.navigate(['chat']);
          },
          this.onLoginError
        );
    }
}

  onLoginError(err) {
    console.error(err);
    alert('User not found');
  }

  ngOnInit () {}
}
