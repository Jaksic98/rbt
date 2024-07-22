import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpicesComponent } from './pages/spices/spices.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SpicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'assignment';
}
