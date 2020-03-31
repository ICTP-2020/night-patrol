import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessagesService } from '../../../services/messages.service';
import { UserData } from '../../../providers/user-data';

import { User } from '../../../interfaces/data-models';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage implements OnInit {
  login: User = { username: '', password: '' };
  submitted = false;

  constructor(
    public userData: UserData,
    public router: Router,
    private messages: MessagesService
  ) { }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username);
      this.router.navigateByUrl('/app/tabs/availability');
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }

  ngOnInit(){

    this.messages.getMessages().subscribe((res) => {
      console.log(res);
    });

    this.messages.getMessage('12').subscribe((res) => {
      console.log(res);
    });

  }
}
