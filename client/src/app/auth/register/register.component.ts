import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { Register } from './register.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'app/store/application-state';
import { RegisterSuccessActions } from 'app/store/actions';

function dateCompare(c: AbstractControl):
          {[key: string]: boolean} | null {
            const startControl = c.get('password');
            const endControl = c.get('confirmpassword');

            if (startControl.value !== endControl.value) {
              return { 'match': true};
            }
            return null;
          }

@Component({
  selector: 'ct-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})


export class RegisterComponent implements OnInit, OnDestroy {

  public signUpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private LoginService: LoginService,
    private router: Router,
    private zone: NgZone,
    private store: Store<ApplicationState>
  ) {}

  signUpSubmit(form: any) {
    const data: Register = {
      firstname: this.signUpForm.value.firstname,
      lastname: this.signUpForm.value.lastname,
      email: this.signUpForm.value.email,
      password: this.signUpForm.value.passwords.password
    };
    console.log(data);

    this.LoginService
      .register(data)
        .subscribe(userInfo => {
          console.error(userInfo);
          this.store.dispatch(
            new RegisterSuccessActions(userInfo)
          );
        this.router.navigate(['chat']);
      },
        this.onLoginError);
    }

    onLoginError (err) {
      console.error(err);
      alert('Something goes wrong');
    }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern('[^@]+@[^@]+\.[a-zA-Z]{2,}')]],
      passwords: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(14)]],
        confirmpassword: ['', [Validators.required]]
      }, {validator: dateCompare})
    });
  }

  ngOnDestroy() {}
}
