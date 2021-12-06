export default class UserDTO {
  private _userName: string;
  private _password: string;
  private _name: string;
  private _mobile_number: number;
  private _date_of_birth: Date;
  private _gender: string;
  private _language: string;


  constructor(userName: string, password: string, name: string, mobile_number: number, date_of_birth: Date, gender: string, language: string) {
    this._userName = userName;
    this._password = password;
    this._name = name;
    this._mobile_number = mobile_number;
    this._date_of_birth = date_of_birth;
    this._gender = gender;
    this._language = language;
  }


  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get mobile_number(): number {
    return this._mobile_number;
  }

  set mobile_number(value: number) {
    this._mobile_number = value;
  }

  get date_of_birth(): Date {
    return this._date_of_birth;
  }

  set date_of_birth(value: Date) {
    this._date_of_birth = value;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }

  get language(): string {
    return this._language;
  }

  set language(value: string) {
    this._language = value;
  }
}
