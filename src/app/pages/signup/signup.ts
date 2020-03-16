import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as CS from '../../providers/database/cosmos.service';
import { Location } from '@angular/common';
import { UserData } from '../../providers/user-data';
import { User } from '../../interfaces/data-models';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage implements OnInit  {

  service: CS.CosmosService;
  //user: User = {} as User;
  newUser: User = { username: '', password: '' } as User;
  submitted = false;

  constructor(
    private location: Location,
    public router: Router,
    public userData: UserData
  ) {this.service = CS.CosmosService.getInstance();}

  async onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      console.log("i hit save")
      await this.service.addItem(this.newUser, "Users");
      this.location.back();
      this.userData.signup(this.newUser.username);
      this.router.navigateByUrl('/app/tabs/availability');
    }
  }
  ngOnInit() {
      }
}