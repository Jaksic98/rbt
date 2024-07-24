import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface Table {
  header: string[];
  rows: number[][];
}

@Component({
  selector: 'app-spices',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spices.component.html',
  styleUrl: './spices.component.scss',
})
export class SpicesComponent {
  spices: any = [
    'biber',
    ['beli', 'crni', 'zeleni'],
    'šafran',
    'kurkuma',
    'kardamon',
  ];

  production: Table = {
    header: ['Indija', 'Bangladeš', 'Turska', 'Kina', 'Pakistan'],
    rows: [[70, 9, 5.7, 5.5, 3]],
  };

  isArray(spice: string | string[]): boolean {
    return Array.isArray(spice);
  }
}
