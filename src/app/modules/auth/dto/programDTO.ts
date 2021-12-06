export default class ProgramDTO{
  private _id: String;
  private _name: String;
  private _description: String;
  private _startDate: Date;
  private _endDate: Date;


  constructor(id: String, name: String, description: String, startDate: Date, endDate: Date) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._startDate = startDate;
    this._endDate = endDate;
  }


  get id(): String {
    return this._id;
  }

  set id(value: String) {
    this._id = value;
  }

  get name(): String {
    return this._name;
  }

  set name(value: String) {
    this._name = value;
  }

  get description(): String {
    return this._description;
  }

  set description(value: String) {
    this._description = value;
  }

  get startDate(): Date {
    return this._startDate;
  }

  set startDate(value: Date) {
    this._startDate = value;
  }

  get endDate(): Date {
    return this._endDate;
  }

  set endDate(value: Date) {
    this._endDate = value;
  }
}
