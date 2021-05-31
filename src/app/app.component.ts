import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'leitor-biometrico';
  scrollTop = 0;
  hideNav = false;
  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    this.hideNav = this.scrollTop < $event.target['scrollingElement'].scrollTop;
    this.scrollTop = $event.target['scrollingElement'].scrollTop;
  }
  opened = false;

  ngOnInit() {}
}
