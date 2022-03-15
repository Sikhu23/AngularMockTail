import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor() {
    console.log("address created")
   }

   name:any
   address:any
   pincode:any
   city:any
   phone:any


  ngOnInit(): void {
  }


  login(){

  }
}
