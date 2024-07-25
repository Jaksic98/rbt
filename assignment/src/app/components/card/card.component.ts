import { Component, Input } from '@angular/core';

export interface Movie {
  id: number;
  categoryId: number;
  imdbId: string;
  name: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() movie: Movie | undefined;

  ngOnInit() {}
}
