import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../api.service';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  // @ViewChild('googleMap') gmapElement: any;
  // map: google.maps.Map;
  employeesData: any;
  lat: 51.678418;
  lng: 7.809007;
  constructor( private apiService: ApiService ) { }

  ngOnInit() {
    this.apiService.getEmployees()
      .subscribe((data) => {
        console.log(data);
        this.employeesData = data;
      });


  //   const mapProp = {
  //     center: new google.maps.LatLng(28.4595, 77.0266),
  //     zoom: 14,
  //     // mapTypeId: google.maps.MapTypeId.ROADMAP
  //     mapTypeId: google.maps.MapTypeId.HYBRID
  //     // mapTypeId: google.maps.MapTypeId.SATELLITE
  //     // mapTypeId: google.maps.MapTypeId.TERRAIN
  //   };
  //   this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  //   const marker = new google.maps.Marker({ position: mapProp.center });
  //   marker.setMap(this.map);
  //
  //   const infowindow = new google.maps.InfoWindow({
  //     content: 'Hey, We are here'
  // });
  //   infowindow.open(this.map, marker);
  }
}
