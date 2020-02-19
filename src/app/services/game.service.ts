import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Game } from '../models/game';


@Injectable({
  providedIn: 'root'
})
export class GameService {
  private url: string = "http://localhost:4200/api/game";
  

  constructor(private http: HttpClient ) { }
  

  public getHeroes (): Observable<Game[]> {
    return of(<Game[]>[
      <Game>{
        id: 1,
        name: "Superman"
      }
    ]);//this.http.get<Game[]>(this.url)
  }

}
