import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from "app/auth/shared";
import { Store } from "@ngrx/store";
import { ApplicationState } from "app/store/application-state";
import { RegisterSuccessActions, LoginSuccessActions } from "app/store/actions";
//import { UserService } from '../users';
declare let gapi: any;

@Component({
  selector: 'app-alt-login-google',
  templateUrl: './alt-login-google.component.html',
  styleUrls: ['./alt-login-google.component.css']
})
export class AltLoginGoogleComponent implements OnInit {

  private profile;
  private userData;

  constructor(private zone: NgZone,
              private router: Router,
             private loginservice: LoginService,
              private store: Store<ApplicationState>) { }

  ngOnInit() {
   
  }

  submitBy() {
     gapi.load('auth2', () => {
      let auth2 = gapi.auth2.init({
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

  }

  onSuccess(user): void {
    this.zone.run(() => {
      this.profile = user.getBasicProfile();
      console.log(this.profile);
      this.userData = {
        firstname: this.profile.ofa,
        lastname: this.profile.wea,
        email: this.profile.U3,
        password: this.profile.Eea
      };

      console.log(this.userData)
      this.loginservice.register(this.userData)
      .subscribe(userInfo => {
           console.error(userInfo)
                this.store.dispatch(
                new RegisterSuccessActions(userInfo)
              )
              this.router.navigate(['chat']);}, 
              this.onRegisterError.bind(this));

      this.router.navigate(['chat']);
    });

   
  }

  
     onRegisterError (err){
            console.error(err);
            if(err.status == 422) {
              console.log('hello')
              const loginData = {
                email: this.userData.email,
                password: this.userData.password
              }

              console.log(loginData);
              this.loginservice
                .login(loginData)
                  .subscribe(
                      userInfo => {
                        this.store.dispatch(
                        new LoginSuccessActions(userInfo)
                      )
                      this.router.navigate(['chat']);
                    },
                    this.onLoginError
                  )
            }
          }

  onLoginError (err){
    console.error(err);
    alert('User not found')
  }
  // onLoginSuccess (): void {
  //    console.log('aaaa');
  //   }

  // onLoginError (err){
  //   console.error(err);
  //   alert('Something goes wrong')
  // }

}
