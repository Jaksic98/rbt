import { Component } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Movie, Comment } from '../../models/models';
import { ActivatedRoute } from '@angular/router';
import { CommentComponent } from '../../components/comment/comment.component';
import { CommonModule, DatePipe } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CommentComponent],
  providers: [DatePipe],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
})
export class MovieComponent {
  private id!: number;
  movie!: Movie;
  comments!: Comment[];
  commentForm: FormGroup;
  commentFormSubmitted: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
  ) {
    this.commentForm = this.formBuilder.group({
      username: [''],
      comment: ['', Validators.required],
    });
  }

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

  submitComment(): void {
    this.commentFormSubmitted = true;
    if (this.commentForm.valid) {
      this.blogService
        .postComment(
          this.id,
          this.commentForm.controls['comment'].getRawValue(),
        )
        .subscribe((comment: any) => {
          console.log(comment);
        });
      this.commentForm.reset();
      this.commentFormSubmitted = false;
    }
  }
}
