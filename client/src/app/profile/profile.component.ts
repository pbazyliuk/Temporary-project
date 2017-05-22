import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'app/store/application-state';
import { ProfileService } from 'app/profile/profile.service';
import { UpdateProfileSuccessActions } from 'app/store/actions';
import { Router } from '@angular/router';

function dateCompare(c: AbstractControl): {[key: string]: boolean} | null {
  const startControl = c.get('currentpassword');
  const endControl = c.get('newpassword');
  if (startControl.value !== endControl.value) {
    return null;
  }
  return { 'match': true};
}

@Component({
  selector: 'ct-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  public profileForm: FormGroup;
  public userInfo$: Observable<object>;
  public userInfoCurrent;
  public userInfoNew;
  public storeConnection;

  constructor(
    private store: Store<ApplicationState>,
    private profileservice: ProfileService,
    private router: Router,
    private fb: FormBuilder) {
      this.storeConnection = store.subscribe (
      );
      this.userInfo$ = store
        .map(this.mapStatetoUserInfo.bind(this));
    }

    mapStatetoUserInfo(state: ApplicationState): object {
      this.userInfoCurrent = state.uiState.user;
      return state.uiState.user;
    }

    profileSubmit(value: object) {
      this.userInfoNew = {
        firstname: this.profileForm.value.firstname || this.userInfoCurrent.firstname,
        lastname: this.profileForm.value.lastname || this.userInfoCurrent.lastname,
        email: this.profileForm.value.email || this.userInfoCurrent.email,
        currentpassword: this.profileForm.value.passwords.currentpassword,
        newpassword: this.profileForm.value.passwords.newpassword
      };

    const userInfoComplex = Object.assign(this.userInfoCurrent, this.userInfoNew, this.userInfoNew.passwords);
      this.profileservice
        .updateProfile(userInfoComplex)
          .subscribe(newUserInfo => {
            this.store.dispatch(
              new UpdateProfileSuccessActions(newUserInfo)
          );
          this.router.navigate(['chat']);
          },
          this.onLoginError);
       }

      onLoginError(err) {
        alert('Something goes wrong');
      }


  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstname: ['', [Validators.minLength(3)]],
      lastname: ['', [Validators.minLength(3)]],
      email: ['', [Validators.pattern('[^@]+@[^@]+\.[a-zA-Z]{2,}')]],
      passwords: this.fb.group({
      currentpassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(14)]],
      newpassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(14)]]
      }, {validator: dateCompare})
    });
  }
}
