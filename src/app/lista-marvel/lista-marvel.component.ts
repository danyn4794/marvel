import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../marvel.service';

@Component({
  selector: 'app-lista-marvel',
  templateUrl: './lista-marvel.component.html',
  styleUrls: ['./lista-marvel.component.css']
})
export class ListaMarvelComponent implements OnInit {

  // nameh: string;
  hero: string;
  thumbnail: string;
  events: string;
  nameh: Array<any> = [];

  constructor(private marvelService: MarvelService) { }

  ngOnInit(): void {

    this.marvelService.getMarvel().subscribe((data2: any)=>{
      this.nameh = data2.data.results;
      console.log(this.nameh);
    })
  }

}
