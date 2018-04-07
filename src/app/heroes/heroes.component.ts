import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HEROES } from '../mock-heroes'

@Component({ //is a decorator function that specifies the Angular metadata for the component.
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  selectedHero: Hero

  heroes = HEROES

  constructor () {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }

  ngOnInit () {
  }

}
