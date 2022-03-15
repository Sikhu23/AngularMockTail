import { ApiservicesService } from './../apiservices.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:ApiservicesService) { }

  ngOnInit(): void {
  }

 user:any={}


  login(){
    let body={
      ...this.user
    }
    console.log("Hello")

    this.service.login(body).subscribe((response:any)=>{
      if(response.token){
        localStorage.token=response.token
      }
      else{
        alert('Please enter correct Id and Pass')

      }
      console.log(response)
    },(error)=>alert('Login erro'))


  }

}
