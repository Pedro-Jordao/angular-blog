import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  crunchyrollLink: string = 'https://www.crunchyroll.com/pt-br/series/GRMG8ZQZR/one-piece?srsltid=AfmBOorzoaaxPZzwD7NOI70nVVGLf5v9u-ypRmMhY0RpuO7L1i6uIVG5';

  imgLink: string = 'https://conteudo.imguol.com.br/c/entretenimento/85/2025/03/07/anime-one-piece-1741362399365_v2_900x506.png'
  constructor() { }

  ngOnInit(): void {
  }

}

