import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'leitor-biometrico';
  scrollTop = 0;
  hideNav = false;


  ngOnInit() {}
}
