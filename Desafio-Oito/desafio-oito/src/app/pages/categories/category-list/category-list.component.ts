import { BackEndService } from './../shared/back-end.service';
import { Component, OnInit } from '@angular/core';

import { Category } from '../shared/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] =[];

  constructor(private service : BackEndService) { }

  ngOnInit(): void {
    this.service.read().subscribe(
      categories => this.categories = categories,
      error => alert("Erro ao carregar a lista!")
    )
  }

  deleteCategory(category: any) {

    const mustDelete = confirm('Deseja realmente excluir?')

    if (mustDelete) {
      this.service.delete(category.id).subscribe(
        () => this.categories = this.categories.filter(element => element != category),
        () => alert("Não foi possível excluir.")
      )
    }
  }
}
