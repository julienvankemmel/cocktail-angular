import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  id:number;
  cocktails;
  cocktailsalcohol;
  constructor(private route: ActivatedRoute,private cocktailService: CocktailService) {
    this.route.params
    .subscribe( params => this.id = params.name)
   }
  ngOnInit() {
    this.getCocktailsByName(this.id);
    this.getCocktailsByAlcohol(this.id);
  }

  getCocktailsByName(id){
    this.cocktailService.getCocktailsByName(id)
    .subscribe(data => {
     this.cocktails = data['drinks']
    });
  }

  getCocktailsByAlcohol(id){
    this.cocktailService.getCocktailsByAlcohol(id)
    .subscribe(data => {
     this.cocktailsalcohol = data['drinks']

    });
  }
}
