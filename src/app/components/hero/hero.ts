import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  backgroungImage = 'hero.jpg';
  title = ' Saveurs authentiques du cameroun';
  subtitle = '15 ans de tradition culinaire à Douala'
}
