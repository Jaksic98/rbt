import { Component, Input } from '@angular/core';
import { Movie } from '../../models/models';

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
