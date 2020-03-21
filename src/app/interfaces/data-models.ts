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

/*
Report Models
*/
export interface ShiftReportAid {
  jackets: number;
  blankets: number;
  socks: number;
  hygiene: number;
  sleeping: number;
  beanies: number;
  gloves: number;
  scarves: number;
  other: string;
  checked: boolean;
}
export interface ShiftReportInfoReferrals {
  information: string;
  referrals: string;
  donations: string;
}

export interface ShiftReportStopDetails {
  timein: string;
  timeout: string;
  male: string;
  female: string;
  under18: string;
}

export interface ShiftReportWrapUp {
  whs: string;
  fridge: string;
  feedback: string;
}
