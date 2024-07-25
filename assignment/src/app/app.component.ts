import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpicesComponent } from './pages/spices/spices.component';
import { BlogComponent } from './pages/blog/blog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SpicesComponent, BlogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'assignment';
}
