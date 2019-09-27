import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  get search() { return this.searchForm.get('search'); }

  searchForm: FormGroup;

  ngOnInit(): void {

    this.searchForm = new FormGroup({
      search: new FormControl(),
    })
  };

  onSubmit(searchForm) {
    this.router.navigate(['/search/'+this.searchForm.value.search]).then(() => {
      window.location.reload();
    });
  }

}
