import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.scss']
})
export class RatesComponent implements OnInit {
  ratesData: any;
  input: number;
  rate: any;
  output: number;

  constructor( private apiService: ApiService ) {}

  convert() {
    this.output = this.rate * this.input;
  }
  ngOnInit() {
    this.apiService.getRates()
      .subscribe((data: any) => {
      this.ratesData = data;
    });
  }
}
