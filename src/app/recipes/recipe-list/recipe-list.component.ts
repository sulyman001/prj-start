import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test recipe', "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/02/Creamy-Cajun-Chicken-6.jpg"),
    new Recipe('A Test Recipe', 'This is simply a test recipe', "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/02/Creamy-Cajun-Chicken-6.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
