import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  UPet: any;
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { 
    this._route.params.subscribe(params =>{
      _httpService.getPet(params.id).subscribe(data =>{
        this.UPet = data;
      })
    })
  }

  ngOnInit() {
    this.UPet = {name:'', type:'', description:'', skills:[]}
  }

  UPsub(){
    let observable = this._httpService.updatePet(this.UPet);
    observable.subscribe(data =>{
      console.log('Pet updated ', data)
      this._router.navigate(['/'+this.UPet._id])
    })
  }
}
