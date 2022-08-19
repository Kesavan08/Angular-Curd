import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormControl,FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { RestService } from '../rest.service';
import { Users } from '../Users';
import { UserFetch } from './UserFetch';
@Component({
  selector: 'app-forms1',
  templateUrl: './forms1.component.html',
  styleUrls: ['./forms1.component.css']
})
export class Forms1Component implements OnInit {
  
  addressForm!:any;
  
  hasUnitNumber = false;
  states = [
    {name: 'Alabama', abbreviation: 'AL'},
    {name: 'Alaska', abbreviation: 'AK'},
    {name: 'American Samoa', abbreviation: 'AS'},
    {name: 'Arizona', abbreviation: 'AZ'},
    {name: 'Arkansas', abbreviation: 'AR'},
    {name: 'California', abbreviation: 'CA'},
    {name: 'Colorado', abbreviation: 'CO'},
    {name: 'Connecticut', abbreviation: 'CT'},
    {name: 'Delaware', abbreviation: 'DE'},
    {name: 'District Of Columbia', abbreviation: 'DC'},
    {name: 'Federated States Of Micronesia', abbreviation: 'FM'},
    {name: 'Florida', abbreviation: 'FL'},
    {name: 'Georgia', abbreviation: 'GA'},
    {name: 'Guam', abbreviation: 'GU'},
    {name: 'Hawaii', abbreviation: 'HI'},
    {name: 'Idaho', abbreviation: 'ID'},
    {name: 'Illinois', abbreviation: 'IL'},
    {name: 'Indiana', abbreviation: 'IN'},
    {name: 'Iowa', abbreviation: 'IA'},
    {name: 'Kansas', abbreviation: 'KS'},
    {name: 'Kentucky', abbreviation: 'KY'},
    {name: 'Louisiana', abbreviation: 'LA'},
    {name: 'Maine', abbreviation: 'ME'},
    {name: 'Marshall Islands', abbreviation: 'MH'},
    {name: 'Maryland', abbreviation: 'MD'},
    {name: 'Massachusetts', abbreviation: 'MA'},
    {name: 'Michigan', abbreviation: 'MI'},
    {name: 'Minnesota', abbreviation: 'MN'},
    {name: 'Mississippi', abbreviation: 'MS'},
    {name: 'Missouri', abbreviation: 'MO'},
    {name: 'Montana', abbreviation: 'MT'},
    {name: 'Nebraska', abbreviation: 'NE'},
    {name: 'Nevada', abbreviation: 'NV'},
    {name: 'New Hampshire', abbreviation: 'NH'},
    {name: 'New Jersey', abbreviation: 'NJ'},
    {name: 'New Mexico', abbreviation: 'NM'},
    {name: 'New York', abbreviation: 'NY'},
    {name: 'North Carolina', abbreviation: 'NC'},
    {name: 'North Dakota', abbreviation: 'ND'},
    {name: 'Northern Mariana Islands', abbreviation: 'MP'},
    {name: 'Ohio', abbreviation: 'OH'},
    {name: 'Oklahoma', abbreviation: 'OK'},
    {name: 'Oregon', abbreviation: 'OR'},
    {name: 'Palau', abbreviation: 'PW'},
    {name: 'Pennsylvania', abbreviation: 'PA'},
    {name: 'Puerto Rico', abbreviation: 'PR'},
    {name: 'Rhode Island', abbreviation: 'RI'},
    {name: 'South Carolina', abbreviation: 'SC'},
    {name: 'South Dakota', abbreviation: 'SD'},
    {name: 'Tennessee', abbreviation: 'TN'},
    {name: 'Texas', abbreviation: 'TX'},
    {name: 'Utah', abbreviation: 'UT'},
    {name: 'Vermont', abbreviation: 'VT'},
    {name: 'Virgin Islands', abbreviation: 'VI'},
    {name: 'Virginia', abbreviation: 'VA'},
    {name: 'Washington', abbreviation: 'WA'},
    {name: 'West Virginia', abbreviation: 'WV'},
    {name: 'Wisconsin', abbreviation: 'WI'},
    {name: 'Wyoming', abbreviation: 'WY'}
  ];
   
  userList=[];
  isEdit=false;
  user={
    firstname:'',
    lastname:'',
    address1:'',
    address2:'',
    city:'',
    state:'',
    pincode:'',
    mobile:'',
    email:'',
    country:''
  }
  
  constructor(private fb: FormBuilder ,private rs:RestService ,private router: Router, private route:ActivatedRoute , private httpClient:HttpClient) { 
   
    this.userList=[];

    
  }
  
  users:Users[]=[];
  val:any;
  
  ngOnInit(): void {
    this.addressForm = new FormGroup({

       
      firstname: new FormControl('',(Validators.compose([Validators.required ,Validators.pattern("/^[a-zA-Z\s]*$/")]))) ,
      lastname: new FormControl("",Validators.compose([Validators.required ,Validators.pattern("/^[a-zA-Z\s]*$/")])),
      address1: new FormControl('', Validators.required),
      address2: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required,),
      pincode :new FormControl("",Validators.compose([Validators.required ,Validators.pattern("^[0-9]*$")])),
      mobile:new FormControl("",Validators.compose([Validators.required ,Validators.pattern("^[0-9]*$")])),
      email:new FormControl("",Validators.compose([Validators.required, Validators.email])),
      country:new FormControl(null,Validators.required),
        
    
    }); 
    // this.rs.getUsers().subscribe
    // (
    //   (resonse)=>
    //   { 
    //     this.users=resonse;
    //   },
    //   (error)=>
    //   {
    //     console.log("Error Occured :"+error);
    //   },
     
     
    // );
    // let sub = this.route.params.subscribe(params=>
    //   {
    //     this.val=params['id'];
    //     // console.log("id :" + this.val);
    //   });
      
    //   this.rs.upUsers(this.val).subscribe(data => {
    //     this.user=data;
    //   })
    this.getLatestUser()
  }


 
  addUser(data:any){
 
    this.rs.creatUser(data).subscribe
    (
     
      (resonse)=>
      {
        this.users=resonse;
        this.getLatestUser()
      }
       
    );
     
   }
   getLatestUser()
   {
    this.rs.getAllUser( ).subscribe
    (
     
      (resonse)=>
      {
        this.users=resonse;
        
      }
       
    );
   }
  //  OnDelete(data:any)
  //  {
  //   this.rs.delUsers(data).subscribe
  //   (
        
  //   )
  //  }
  editUsers(user1:any){
    this.isEdit=true;
    this.user=user1; 
  }
  deleteUsers(user:any)
  {
    this.rs.deleteUser(user).subscribe(()=>{
      this.getLatestUser();
    })
  }
  updateUsers()
  {
    this.isEdit=!this.isEdit;
    this.rs.updateUser(this.user).subscribe(()=>{this.getLatestUser();})
    {
      this.getLatestUser();
    }
  }
   OnUpdate(contactId:any)
   {
     
    } 
  }

  
   
    
  
 

