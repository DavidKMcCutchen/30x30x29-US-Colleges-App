import { Component } from '@angular/core';

@Component({
  selector: 'colleges-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'US Colleges';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'search?country=United+States', icon: 'view_list', title: 'US Colleges'}
  ]
}
