import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

  constructor(private http:HttpClient ) { }


  login(body:any){
    let url="https://apifromashu.herokuapp.com/api/login"

    return this.http.post(url,body)
  }

  signup(body:any){
    let url = "https://apifromashu.herokuapp.com/api/register"

      return this.http.post(url,body)

  }



  randomMockTail(){
    let url="https://www.thecocktaildb.com/api/json/v1/1/random.php"
    return this.http.get(url)
  }

  searchById(id:any){
    let url='https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+id
    console.log(url)
    return this.http.get(url)
  }

  addtocart(url:any,body:any,headers:any){
    return this.http.post(url,body,{headers:headers});

  }
}
