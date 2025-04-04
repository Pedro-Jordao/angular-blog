import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  newsText: string = ''

  @Input()
  newsLink: string = ''

  @Input()
  imgLink: string = ''

  @Input()
  newsTitle: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
