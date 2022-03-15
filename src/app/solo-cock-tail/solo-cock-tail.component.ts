import { ApiservicesService } from './../apiservices.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-solo-cock-tail',
  templateUrl: './solo-cock-tail.component.html',
  styleUrls: ['./solo-cock-tail.component.css']
})
export class SoloCockTailComponent implements OnInit {
  mockTailId:any
  mockTailDetails:any={}

  constructor(private router:ActivatedRoute, private service:ApiservicesService) {
    this.mockTailId=this.router.snapshot.params['id']
    console.log(this.mockTailId)

    this.service.searchById(this.mockTailId).subscribe((response:any)=>{
      console.log(response.drinks[0])
      this.mockTailDetails=response.drinks[0]
    })

  }

  ngOnInit(): void {
  }
  addtocart(){
    let url="https://apifromashu.herokuapp.com/api/addcaketocart"
    let body={
      cakeid:this.mockTailDetails.idDrink,
      name:this.mockTailDetails.strDrink,
      price:"99",
      image:this.mockTailDetails.strDrinkThumb,
      weight:"0"

    }
    console.log("Hi")

    let headers=new HttpHeaders()
    headers=headers.append("authtoken",localStorage.token)

    this.service.addtocart(url,body,headers).subscribe((response)=>{
      console.log(response)
    },(error)=>console.log(error))
  }

}
