import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../api.service';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  public employeesData: any;
  public lat: 51.678418;
  public lng: 7.809007;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getEmployees()
      .subscribe((data) => {
        console.log(data);
        this.employeesData = data;
      });
  }
}
