import { Component } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';
import { FilterComponent } from '../../components/filter/filter.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, CardComponent, FilterComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  initialMovies: any;
  movies: any[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getMovies().subscribe((movies: any) => {
      this.initialMovies = movies;
      this.getMovies(null);
    });
  }

  getMovies(id: number | null): void {
    if (id === null) {
      this.movies = this.initialMovies;
    } else {
      this.movies = this.initialMovies.filter(
        (movie: any) => movie.categoryId == id
      );
    }
  }

  categoryChange($event: any): void {
    this.getMovies($event);
  }
}
