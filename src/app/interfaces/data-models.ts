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
  type: string;
  dateCreated?: string;
  dateCompleted?: string;
  nightShifts?: NightShiftDetails;
  dayShifts?: DayShiftDetails;
  speciaEvents?: SpecialEventDetails;
  shiftWrapUp?: NightShiftWrapUp;
}

export interface NightShiftDetails {
  servingsProvided?: NightShiftServingDetails[]; 
  aidProvided?: NightShiftMaterialAid[];
  information?: NightShiftReferrals;
  donations?: NightShiftDonations[];
}

export interface NightShiftServingDetails {
  serveType: string;
  serveAmount: number;
}

export interface NightShiftReferrals {
  information: string;
  referral: string;
}

export interface NightShiftDonations {
  donationType?: string;
  financialDonation?: number;
  materialDonation?: string;
}


export interface NightShiftMaterialAid {
  aidType?: string;
  aidAmount?:number;
  otherAid?:string;
}

export interface NightShiftWrapUp {
  whs: string;
  fridgeTemp: string;
  feedback: string;

}

export interface DayShiftDetails {
  stockType?: string;
  stockTypeOther?: string;
  stockIsLoaded: boolean;
  endShiftItem: string;
  endShiftItemChecked: boolean;
  summary: string;
}
export interface SpecialEventDetails {
 feedback: string;
}

