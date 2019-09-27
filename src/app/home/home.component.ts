import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private cocktailService : CocktailService) { }
  cocktails;
  ngOnInit() {
    this.cocktails = this.cocktailService.getCocktails()
    .subscribe(data =>{
      this.cocktails=data['drinks'];
    })
  }

}
