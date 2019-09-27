import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id:string;
  cocktail;
  constructor(private route: ActivatedRoute,private cocktailService: CocktailService) {
    this.route.params
    .subscribe( params => this.id = params.id)
   }
  ngOnInit() {
    this.getCocktailByName(this.id);
  }
  getCocktailByName(id){
    this.cocktailService.getCocktailsByName(id)
    .subscribe(data => {
     this.cocktail = data['drinks'][0];
     console.log(this.cocktail);
    });
  }
}
