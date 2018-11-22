import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Test-Recipe",'this is a test',"https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg"),
    new Recipe("Test-Recipe2",'this is a test2',"https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
