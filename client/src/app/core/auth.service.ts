import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {catchError, firstValueFrom, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = environment.API_URL;
  http = inject(HttpClient)

  login(user:User){
    this.http.post<User>(`${this.url}/login`, user).pipe(catchError(  e=>of(e))).subscribe(r=>console.log(r))
    // try{
    //   const result = await firstValueFrom(this.http.post<User>("http://localhost:3000/login", user).pipe(catchError(  e=>of(e))))
    // }catch(e){
    //   console.error(e)
    // }
  }
}import { User } from '../shared/models/user';
import { environment } from '../../environments/environment.development';

