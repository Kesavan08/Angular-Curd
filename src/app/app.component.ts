import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from './rest.service';
import { Users } from './Users';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private rs:RestService){}
 
  index=["id","firstName","lastName","email","mobile","salary"];
  users : Users[]=[];
   
 displayedColumns: string[] = ['firstname ', 'lastname', 'email', 'mobile','address1','address2','city','state','pincode','country'];
ngOnInit(): void {
  // this.rs.getUsers().subscribe
  // (
  //   (resonse)=>
  //   { 
  //     this.users=resonse;
  //   },
  //   (error)=>
  //   {
  //     console.log("Error Occured :"+error);
  //   }
  // );
    
}

}
