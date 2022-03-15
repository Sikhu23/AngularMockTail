import { ApiservicesService } from './../apiservices.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service:ApiservicesService) { }

  ngOnInit(): void {
  }
  user:any={}

  signup(){
    let body={...this.user}
    this.service.signup(body).subscribe((response:any)=>{
      console.log(response)

      if(response.message=="User Registered"){
        alert("Verification mail sent to email, Please verify your mail for access")

      }
      else if(response.message=="User Already Exists"){
        alert("Verification mail Already sent")

      }

    },(error)=>alert("Signup API error"))

  }

}
