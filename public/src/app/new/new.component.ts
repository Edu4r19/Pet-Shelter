import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  Pets: any;
  NPet: any;
  constructor(private _httpService: HttpService, private _router: Router) { 
    _httpService.getPets().subscribe(data =>{
      console.log('All Pets: ',data)
      this.Pets = data;
    })
  }

  ngOnInit() {
    this.NPet = {name:'', type:'', description:'', skills:[]}
  }

  NPsub(){
    let observable = this._httpService.addPet(this.NPet);
    observable.subscribe(data =>{
      this.NPet = {name:'', type:'', description:'', skills:[]}
      this._router.navigate(['/'])
    })
  }

  
}
