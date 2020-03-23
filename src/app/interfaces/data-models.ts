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
  time: string;
}

/*
Report Models
*/

export interface Report {
  _ID?: number;
  nightShifts?: NightShiftDetails[];
  dayShifts?: DayShiftDetails[];
  speciaEvents?: SpecialEventDetails[];
  shiftWrapUp?: NightShiftWrapUp[];


}

export interface NightShiftDetails {
  servings?: NightShiftServingDetails[];
  materialAid?: NightShiftMaterialAid[];
}

export interface NightShiftServingDetails {
  serveType: string;
  serveAmount: number;
}

export interface NightShiftMaterialAid {
  aidType: string;
  aidAmount:number;
}

export interface NightShiftWrapUp {
  donationType: string;
  donationAmount: number;
  donationOther: string;
  whs: string;
  fridgeTemp: string;
  feedback: string;

}

export interface DayShiftDetails {
  stockType: string;

}
export interface SpecialEventDetails {
 feedback: string;

}

