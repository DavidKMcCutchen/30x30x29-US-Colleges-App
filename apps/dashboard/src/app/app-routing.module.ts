import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { CollegesComponent } from './colleges/colleges.component';
import { LoginComponent, WildComponent } from "@colleges/ui-login";
import { CollegeComponent } from './college/college.component';

const routes: Route[] = [
  {path: '', component: LoginComponent },
  {path: 'wild', component: WildComponent},
  {path: 'search?country=United+States', component: CollegesComponent},
  {path: 'search?country=United+States/:id', component: CollegeComponent },
  {path: 'login', component: LoginComponent },
  {path: '**', redirectTo: 'wild', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }