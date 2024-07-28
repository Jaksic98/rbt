import { Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { SpicesComponent } from './pages/spices/spices.component';
import { MovieComponent } from './pages/movie/movie.component';

export const routes: Routes = [
  { path: 'spices', component: SpicesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: MovieComponent },
];
