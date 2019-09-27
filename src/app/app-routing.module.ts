import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'detail/:id', component:DetailComponent},
  {path:'search/:name', component:SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
