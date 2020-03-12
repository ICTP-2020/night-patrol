/*
User Models
*/
export interface User {
  _ID?: string;
  username?: string;
  password?: string;
  fName?: string;
  sName?: string;
  pName?: string;
  email?: string;
  roles?: string[];
}
export interface UserList {
  users: User[];
}

/*
Shift Models
*/
export interface Shift {
  _ID?: string;
  date?: Date;
  van?: string;
  volunteers?: User[];
  teamLead?: User;
}
