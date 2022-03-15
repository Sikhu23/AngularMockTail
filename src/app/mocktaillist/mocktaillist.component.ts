import { HttpHeaders } from '@angular/common/http';
import { ApiservicesService } from './../apiservices.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mocktaillist',
  templateUrl: './mocktaillist.component.html',
  styleUrls: ['./mocktaillist.component.css']
})
export class MocktaillistComponent implements OnInit {
  mocktailarr:any=[]

  constructor(private service:ApiservicesService) {
    if(this.mocktailarr.length!==9){
      for(var i=0;i<9;i++){
        this.service.randomMockTail().subscribe(((response:any)=>{
          this.mocktailarr.push(response.drinks[0]);
          console.log(this.mocktailarr)
        }))
      }
    }


   }

  ngOnInit(): void {
  }

  addtocart(mockTailDetails:any){
    if(localStorage.token){
      let url="https://apifromashu.herokuapp.com/api/addcaketocart"
    let body={
      cakeid:mockTailDetails.idDrink,
      name:mockTailDetails.strDrink,
      price:"99",
      image:mockTailDetails.strDrinkThumb,
      weight:"0"

    }
    console.log("Hi")

    let headers=new HttpHeaders()
    headers=headers.append("authtoken",localStorage.token)

    this.service.addtocart(url,body,headers).subscribe((response)=>{
      console.log(response)
    },(error)=>console.log(error))
    }
    else{
     alert("Please Login First")
    }
  }




}
