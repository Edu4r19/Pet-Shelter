import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styleUrls: ['./showall.component.scss']
})
export class ShowallComponent implements OnInit {
  Pets: any;
  constructor(private _httpService: HttpService, private _router: Router) {
    _httpService.getPets().subscribe(data =>{
      console.log('All Pets: ',data)
      this.Pets = data;
      this.Pets.sort((a,b) => (a.type > b.type) ? 1 : ((b.type > a.type ? -1 : 0)));
    })
  }

  ngOnInit() {
  }

  
}
