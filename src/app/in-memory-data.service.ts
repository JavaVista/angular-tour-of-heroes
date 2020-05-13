import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Pitt' },
      { id: 2, name: 'Spartan' },
      { id: 3, name: 'Jackson Dane' },
      { id: 4, name: 'The Maxx' },
      { id: 5, name: 'Sentinel' },
      { id: 6, name: 'Caitlin Fairchild' },
      { id: 7, name: 'The Dragon' },
      { id: 8, name: 'Samaritan' },
      { id: 9, name: 'Witchblade' },
      { id: 10, name: 'Spawn' },
    ];
    return { heroes };
  }

  // Overrides the genID method to ensure a hero always has an id.
  // if the heroes array is empty, the method below returns the
  // the initial number (1). If the heroes is not empty, the method
  // returns the highest hero id +1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 1;
  }

  constructor() {}
}
