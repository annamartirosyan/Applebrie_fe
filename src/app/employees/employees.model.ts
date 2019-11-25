export class Employee {
  public fullName: string;
  public latitude: number;
  public longitude: number;

  constructor(name: string, latitude: number, longitude: number) {
    this.fullName = name;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
