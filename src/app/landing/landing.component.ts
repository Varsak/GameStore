import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { Observable, of } from 'rxjs';
import { Game } from '../models/game';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  
  public games$ : Observable<Game[]>;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    // // this.games$ = of(<Game[]>[
    // //   <Game>{
    // //     id: 1,
    // //     name: "Superman"
    // //   }
    // // ]);//this.gameService.getHeroes(); 
  }

  
}
