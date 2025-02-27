import { Component, EventEmitter, Output } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent {
  categories: string[] = ['All', 'Телефоны', 'Обувь', 'Спорт', 'Укращения'];
  selectedCategory: string = 'All'; 

  @Output() categorySelected = new EventEmitter<string>();

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.categorySelected.emit(category);
  }
}
