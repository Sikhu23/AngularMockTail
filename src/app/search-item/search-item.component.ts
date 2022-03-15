import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {
  mockTailDetails:any=[]

  constructor(private router:ActivatedRoute,private http:HttpClient) {

    this.router.queryParams.subscribe((response:any)=>{
        let url='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+response.s
      this.http.get(url).subscribe((response:any)=>{
        this.mockTailDetails=response.drinks;
        console.log(this.mockTailDetails)
      })


    })
  }

  ngOnInit(): void {
  }

}
