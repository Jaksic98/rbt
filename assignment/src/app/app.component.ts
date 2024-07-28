import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SpicesComponent } from './pages/spices/spices.component';
import { BlogComponent } from './pages/blog/blog.component';
import { MovieComponent } from './pages/movie/movie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    SpicesComponent,
    BlogComponent,
    MovieComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'assignment';
}
