import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Repository } from '../repository';

@Injectable({
  providedIn: 'root'
})
export class RepoRequestService {
  repo: Repository[];
  private key:String="8e64218e8e19a05bedea5c985f2c01636dcf889f";

  constructor(private http: HttpClient) {
    this.repo=[];
  }
  repoRequest(username) {
    interface ApiResponse {
      name: string;
      html_url: string;
      created_at: Date;
    }

    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>("https://api.github.com/users/"+username+"/repos?access_token="+this.key).toPromise().then(response => {
        for(var i in response){
        this.repo.push(response[i])

        resolve()
        }
      },
        error => {

          reject(error)
        })
    })
    return promise
  }
}