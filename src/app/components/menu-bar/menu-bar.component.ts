import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  @Input()
  linkLinkedin: string = '';

  @Input()
  linkInstagram: string = '';

  @Input()
  linkYoutube: string = '';

  @Input()
  linkedinImg: string = '';

  @Input()
  instagramImg: string = '';

  @Input()
  youtubeImg: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
