import { Component } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Movie, Comment } from '../../models/models';
import { ActivatedRoute } from '@angular/router';
import { CommentComponent } from '../../components/comment/comment.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, CommentComponent],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
})
export class MovieComponent {
  private id!: number;
  movie!: Movie;
  comments!: Comment[];

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.blogService.getMovie(this.id).subscribe((movie: any) => {
      this.movie = movie;
    });

    this.blogService.getComments(this.id).subscribe((comments: any) => {
      this.comments = comments;
    });
  }
}
