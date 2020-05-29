import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  Pet: any;
  clicked = false;
  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) {
    this._route.params.subscribe(params =>{
      _httpService.getPet(params.id).subscribe(data =>{
        this.Pet = data;
      })
    })
  }

  ngOnInit() {
    this.Pet = {name:'', type:'', description:'', skills:[]}
  }

  Like(id: string){
    let observable = this._httpService.lPet(id);
    observable.subscribe(data =>{
      console.log(data)
    })
  }

  Unlike(id: string){
    let observable = this._httpService.ulPet(id);
    observable.subscribe(data =>{
      console.log(data)
    })
  }

  DPsub(id: string){
    this._httpService.destroyPet(id).subscribe(data =>{
      console.log('Pet Erased ',data);
      this._router.navigate(['/'])
    })
  }
}
