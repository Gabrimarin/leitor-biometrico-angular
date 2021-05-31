import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-image',
  templateUrl: './custom-image.component.html',
  styleUrls: ['./custom-image.component.scss']
})
export class CustomImageComponent implements OnInit {

  @Input() src: string;
  constructor() { }

  ngOnInit(): void {
  }

}
