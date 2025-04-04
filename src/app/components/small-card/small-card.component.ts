import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  link: string = 'https://conteudo.imguol.com.br/c/entretenimento/85/2025/03/07/anime-one-piece-1741362399365_v2_900x506.png';
  imgLink: string = 'https://conteudo.imguol.com.br/c/entretenimento/85/2025/03/07/anime-one-piece-1741362399365_v2_900x506.png';

  constructor() { }

  ngOnInit(): void {
  }

}
