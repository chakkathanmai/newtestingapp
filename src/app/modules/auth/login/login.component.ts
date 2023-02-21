import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
users!: User;

  constructor(private _userService: UserService, private _router: Router) {}

  ngOnInit(): void {}

  onLoginWithContact = (loginForm: NgForm) => {
    let user = loginForm.value;

    this._userService
      .loginWithContact(user.contact, user.password)
      .subscribe((data) => {
        console.log(data);
        this.users = data;
        this._router.navigate(['/home']);
      });
  };

  onLoginWithEmail = (form: NgForm) => {
    let user = form.value;

    this._userService
      .loginWithEmail(user.email, user.password)
      .subscribe((data) => {
        console.log(data);
        this.users = data;
        this._router.navigate(['/home']);
      });
  };

}
