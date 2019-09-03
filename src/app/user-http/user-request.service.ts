import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {
  user: User;
  private key:String="9a3a19bd39c3ed865eb210e0f22de235240852f5";

  constructor(private http: HttpClient) {
    this.user = new User("", "", 0);
  }
  userRequest(username) {
    interface ApiResponse {
      login: string;
      avatar_url: string;
      public_repos: number;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>("https://api.github.com/users/"+username+"?access_token="+this.key).toPromise().then(response=>{
        this.user.login= response.login
        this.user.avatar_url = response.avatar_url
        this.user.public_repos = response.public_repos

        resolve()
      },
      error=>{
        // this.user.username = "Never, never, never give up"
        // this.user.reponum = "Winston Churchill"

        reject(error)
      })
    })
    return promise
  }
  }

