import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero : Hero = {
    id : 111,
    name: "Harsh Mule"
  }
  constructor() { }
  heroes = "this is heroes before"
  heroes_array = ["this is first", "this is second", "this is third"]
  ngOnInit() {
    this.test()
  }

  test() {
    console.log("test func")
  }

}
