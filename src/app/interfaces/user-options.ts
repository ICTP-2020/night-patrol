
export interface UserOptions {
  //Needed for signup and login, whatever here put in their ts files
  //And place holders of that data.
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  nickName: string;
  //emailAddress: string;
  //Phone is saved a string, as people might put addtional characters in. Well have to convent the numbers
  //to the same format
  //volContact: string;
  //work on getting drop down selecter working
  //teamLeader: string;
  //driverLicence: string;
}
