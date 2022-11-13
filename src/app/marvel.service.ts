import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  url: string;
  ts: string;
  apikey: string;

  constructor(private http: HttpClient) { 
    this.url = `https://gateway.marvel.com/v1/public/characters?ts=34&orderBy=name&limit=10&apikey=ef797b7d3779feeaa4c632d45870f22a&hash=b6228a3777d4912abd4c5267be4d2883`
  }

  getMarvel(){
    return this.http.get(`${this.url}`)
  }
}
