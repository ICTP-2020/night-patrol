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
  _ID?: number;
  name?: string,
  date?: string;
  van?: string;
  stops?: Stop[];
  volunteers?: User[];
  teamLead?: User;
}

export interface Location{
  name: string;
  address: string;
}

export interface Stop{
  location: Location;
  aproxTime: string;
}