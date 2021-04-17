import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor() {}
  scrollTop = 0;
  hideNav = false;
  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    this.hideNav = this.scrollTop < $event.target['scrollingElement'].scrollTop;
    this.scrollTop = $event.target['scrollingElement'].scrollTop;
  }
  ngOnInit(): void {}
}
