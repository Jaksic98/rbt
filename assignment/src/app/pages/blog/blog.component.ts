import { Component } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  movies: any[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getMovies().subscribe((movies: any) => {
      this.movies = movies;
    });
  }
}
