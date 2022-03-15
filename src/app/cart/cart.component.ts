import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartArr:any=[]

  constructor(private http:HttpClient) {

    // let url="https://apifromashu.herokuapp.com/api/cakecart"
    // let body={}
    // let headers= new HttpHeaders();
    // headers=headers.append("authtoken",localStorage.token)
    // console.log(headers)
    // this.http.post(url,body,{
    //   headers:headers
    // }).subscribe((response:any)=>{
    //   console.log(response)
    //   this.cartArr=response.data

    // })

    let url="https://apifromashu.herokuapp.com/api/cakecart"
    let body={}
    // let headers= new HttpHeaders();
    // headers=headers.append("authtoken",localStorage.token)
    // console.log(headers)
    this.http.post(url,body).subscribe((response:any)=>{
      console.log(response)
      this.cartArr=response.data

    })

   }

  ngOnInit(): void {
  }

  add(event:any){
    let url="https://apifromashu.herokuapp.com/api/addcaketocart"
    let body={...event}
    // let headers= new HttpHeaders();
    // headers=headers.append("authtoken",localStorage.token);
    this.http.post(url,body).subscribe((response)=>{
      // alert("item added");
      let url="https://apifromashu.herokuapp.com/api/cakecart"
      let body={}
      // let headers= new HttpHeaders();
      // headers=headers.append("authtoken",localStorage.token)
      // console.log(headers)
      this.http.post(url,body).subscribe((response:any)=>{
        console.log(response)
        this.cartArr=response.data

      })
    })


  }

  minus(event:any){

    let url="https://apifromashu.herokuapp.com/api/removeonecakefromcart";
    let body={...event}
    let headers= new HttpHeaders();
    headers=headers.append("authtoken",localStorage.token);
    this.http.post(url,body,{headers:headers}).subscribe((response)=>{
      // alert("item added");
      let url="https://apifromashu.herokuapp.com/api/cakecart"
      let body={}
      let headers= new HttpHeaders();
      headers=headers.append("authtoken",localStorage.token)
      console.log(headers)
      this.http.post(url,body,{
        headers:headers
      }).subscribe((response:any)=>{
        console.log(response)
        this.cartArr=response.data

      })
    })

  }

  removeAll(event:any){
    let url="https://apifromashu.herokuapp.com/api/removecakefromcart";
    let body={...event}
    let headers= new HttpHeaders();
    headers=headers.append("authtoken",localStorage.token);
    this.http.post(url,body,{headers:headers}).subscribe((response)=>{
      // alert("item added");
      let url="https://apifromashu.herokuapp.com/api/cakecart"
      let body={}
      let headers= new HttpHeaders();
      headers=headers.append("authtoken",localStorage.token)
      console.log(headers)
      this.http.post(url,body,{
        headers:headers
      }).subscribe((response:any)=>{
        console.log(response)
        this.cartArr=response.data

      })
    })

  }

}
