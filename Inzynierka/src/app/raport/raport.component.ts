import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Raport } from '../models/raport';

@Component({
  selector: 'app-raport',
  templateUrl: './raport.component.html',
  styleUrls: ['./raport.component.css']
})
export class RaportComponent implements OnInit {

  raportList: Array<Raport>;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getRaportsOneEmployee().then((result) => {
      this.raportList = result;
      console.log(this.raportList);
    });
  }

}
