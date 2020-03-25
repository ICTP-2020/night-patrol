import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

import { UserData } from '../../../providers/user-data';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  styleUrls: ['./account.scss'],
})
export class AccountPage implements AfterViewInit {
  username: string;
  password: string;
  pName: string;
  nickname: string;

  constructor(
    public alertCtrl: AlertController,
    public router: Router,
    public userData: UserData,
  ) { }

  ngAfterViewInit() {
    this.getUsername();
  }

  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing

  // Commented out as we might not want to get users to change their username
  
  // async changeUsername() {
  //   const alert = await this.alertCtrl.create({
  //     header: 'Change Username',
  //     buttons: [
  //       'Cancel',
  //       {
  //         text: 'Ok',
  //         handler: (data: any) => {
  //           this.userData.setUsername(data.username);
  //           this.getUsername();
  //         }
  //       }
  //     ],
  //     inputs: [
  //       {
  //         type: 'text',
  //         name: 'username',
  //         value: this.username,
  //         placeholder: 'Username'
  //       }
  //     ]
  //   });
  //   await alert.present();
  // }

  getUsername() {
    this.userData.getUsername().then((username) => {
      this.username = username;
    });
  }

  async changePassword() {
    console.log('Clicked to change password');
    const alert = await this.alertCtrl.create({
      header: 'Change Password',
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
          placeholder: 'Password'
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
  // use the same calls to change what that feild is like the username
  async changePreferedName() {
    console.log('Clicked to change Nick Name');
    const alert = await this.alertCtrl.create({
      header: 'Change Nick Name',
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (data: any) => {
            this.userData.setPreferedName(data.nickname);
            this.getPreferedName();
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'nickname',
          value: this.nickname,
          placeholder: 'Nick Name'
        }
      ]
    });
    await alert.present();
  }
  //  gets the prefered name from the database like the username call
  getPreferedName() {
    this.userData.getPreferedName().then((pName) => {
      this.pName = pName;
    });
  }
  logout() {
    this.userData.logout();
    this.router.navigateByUrl('/login');
  }

  //A old try to change the header with the same call as usernames
  async changeHeaderName() {
    console.log('Change the header name')
  }

  // Previous and current shift are currently set as placeholders
  previousShift() {
    console.log('This is were the previous shift the person has done will show');
    //Counter on the database
    
  }

  currentShift() {
    console.log('This is were the current shift the person has done will show');
    //Try to put it to the filter of shift selected by user
    this.router.navigateByUrl('/app/tabs/shifts');
  }
  
}

