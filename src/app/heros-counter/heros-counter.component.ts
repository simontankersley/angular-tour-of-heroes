import { Component, OnInit } from '@angular/core';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heros-counter',
  templateUrl: './heros-counter.component.html',
  styleUrls: ['./heros-counter.component.css']
})
export class HerosCounterComponent implements OnInit {

  heroesCount = 0

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.heroesCount$.subscribe(
      count => {
        this.heroesCount = count
      }
    )
  }

}
