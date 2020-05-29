import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowallComponent } from './showall/showall.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';


const routes: Routes = [
  {path:'', redirectTo: 'pets', pathMatch:'full'},
  {path: 'pets', component: ShowallComponent},
  {path: 'new', component: NewComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: ':id', component: ShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
