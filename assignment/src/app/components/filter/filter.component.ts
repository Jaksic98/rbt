import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

export interface Category {
  id: number;
  name: string;
}

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  filterForm: FormGroup;
  categories: Category[] = [];

  @Output() categorySelectedEvent = new EventEmitter<number | null>();
  @ViewChildren('radioInput') radios!: QueryList<ElementRef>;

  constructor(
    private blogService: BlogService,
    private formBuilder: FormBuilder,
  ) {
    this.filterForm = this.formBuilder.group({
      category: [''],
    });

    this.filterForm.get('category')!.valueChanges.subscribe((value) => {
      this.categorySelectedEvent.emit(value);
    });
  }

  ngOnInit() {
    this.blogService.getCategories().subscribe((categories: any) => {
      this.categories = categories;
    });
  }

  clearRadios() {
    this.filterForm.get('category')?.reset();
  }
}
