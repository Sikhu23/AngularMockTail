import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isloggedin:boolean=localStorage.token?true:false
  constructor(private router:Router) { }
  searchedItem:any

  ngOnInit(): void {
  }

  ngDoCheck(){
    if(localStorage.token){
      this.isloggedin=true

    }
    else{
      this.isloggedin=false
    }
  }

  search(){
    if(this.searchedItem){
      this.router.navigate(['/search'],{queryParams:{s:this.searchedItem}})
    }

  }


  logout(){
    this.isloggedin=false
    localStorage.clear()
  }

}
