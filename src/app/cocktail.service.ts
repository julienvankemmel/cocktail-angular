import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable,forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http:HttpClient) { }
  getCocktails():Observable<any[]>{
    return this.http.get<any[]>('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
    .pipe(
      tap(data => data)
    )
  }
  getCocktailsByName(name): Observable<any>{
    return this.http.get<any>('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+name)
    .pipe(
      tap(data => data)
    )
  }
  getCocktailsByAlcohol(name): Observable<any>{
    return this.http.get<any>('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+name)
    .pipe(
      tap(data => data)
    )
  }
}
