import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserFetch } from './forms1/UserFetch';
import { Users } from './Users';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }
  url: string = "http://localhost:3000/Users";
  
  // getUsers():Observable<Users[]>
  // {
  //   return this.http.get<Users[]>(this.url)
  // }
  // putUsers( data:any):Observable<Users[]>
  // {
  //   return this.http.post <Users[]>(this.url,data)
  // }
  // delUsers(id:number) 
  // {
  //   const url1 = `${this.url}/${id}`;
  //   return this.http.delete<Users>(url1)
  // }
  // upUsers(cntactId:any,upData:any):Observable<Users>
  // {
  //   const url1 = `${this.url}/${cntactId}}`;
  //   return this.http.put<Users>(url1,upData)
    
  // }



  creatUser(user:any){
      return this.http.post<Users[]>(this.url,user)  
  }
  getAllUser(){
    return this.http.get<Users[]>(this.url)
  }
  updateUser(user:any){
    return this.http.put<Users[]>(this.url+"/"+user.id,user)
  }
  deleteUser(user:any){
    return this.http.delete<Users[]>(this.url+"/"+user.id)
  }

}
