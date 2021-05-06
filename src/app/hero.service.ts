import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes:any = [
    {name: "ABC", isSecret: false},
    {name: "DEF", isSecret: true},
    {name: "GHI", isSecret: true},
  ]
  constructor(
    private isAuthorized: boolean
  ) { }
  
  getHeroes() {
    const auth = this.isAuthorized ? 'authorized ' : 'unauthorized';
    // console.log("abc",this.isAuthorized);
    return this.heroes.filter(hero => this.isAuthorized || !hero.isSecret);
  }
}
