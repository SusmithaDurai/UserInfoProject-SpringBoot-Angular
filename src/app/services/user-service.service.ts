import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private Url:string;

  constructor(private httpClient:HttpClient ) { 
    this.Url='http://localhost:8080/users';
  }

  public getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.Url);

  }

  public save(user:User){
    return this.httpClient.post<User>(this.Url,user);
  }
}
