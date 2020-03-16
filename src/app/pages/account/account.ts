import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

import { UserData } from '../../providers/user-data';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  styleUrls: ['./account.scss'],
})
export class AccountPage implements AfterViewInit {
  username: string;
  password: string;

  constructor(
    public alertCtrl: AlertController,
    public router: Router,
    public userData: UserData
  ) { }

  ngAfterViewInit() {
    this.getUsername();
  }

  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing
  async changeUsername() {
    const alert = await this.alertCtrl.create({
      header: 'Change Username',
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (data: any) => {
            this.userData.setUsername(data.username);
            this.getUsername();
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'username',
          value: this.username,
          placeholder: 'username'
        }
      ]
    });
    await alert.present();
  }

  getUsername() {
    this.userData.getUsername().then((username) => {
      this.username = username;
    });
  }

  async changePassword() {
    console.log('Clicked to change password');
    const alert = await this.alertCtrl.create({
      header: 'Change Paasword',
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (data: any) => {
            this.userData.setPassword(data.password);
            this.getPassword();
          }
        }
      ],
      inputs: [
        {
          type: 'password',
          name: 'password',
          value: this.password,
          placeholder: 'password'
        }
      ]
    });
    await alert.present();
  }

  getPassword() {
    this.userData.getPassword().then((password) => {
      this.password = password;
    });
  }

  logout() {
    this.userData.logout();
    this.router.navigateByUrl('/login');
  }

  // Previous and current shift are currently set as placeholders
  previousShift() {
    console.log('This is were the previous shift the person has done will show');
  }

  currentShift() {
    console.log('This is were the current shift the person has done will show');
  }
}
