import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-item',
  templateUrl: './nav-bar-item.component.html',
  styleUrls: ['./nav-bar-item.component.scss'],
})
export class NavBarItemComponent implements OnInit {
  @Input() title: string;
  @Input() active?: boolean;
  @Input() link: string;
  href = window.location.href;
  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.active = this.link === val.urlAfterRedirects;
      }
    });
  }

  ngOnInit() {
    this.active = this.router.url == this.link;
  }
}
