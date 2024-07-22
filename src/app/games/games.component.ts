import { Component,EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
  <h3>Los juegos favoritos de {{ username }}</h3>
    <ul>
      @for (game of games; track game.id) {
        <li (click)="fav(game.title)">{{game.title}}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(title: string) {
    this.addFavoriteEvent.emit(title);
  }
  games = [
    {
      id: 1,
      title: 'Super Mario Bros'
    },
    {
      id: 2,
      title: 'Zelda'
    },
    {
      id: 3,
      title: 'Donkey Kong'
    }
  ];
}
