import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Repository } from '../repository';

@Injectable({
  providedIn: 'root'
})
export class RepoRequestService {
  repo: Repository[];

  constructor(private http: HttpClient) {
    // this.repo = new Repository("", "", new Date());
    this.repo=[];
  }
  repoRequest() {
    interface ApiResponse {
      name: string;
      html_url: string;
      created_at: Date;
    }

    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>("https://api.github.com/users/umwalikara/repos?access_token="+environment.key).toPromise().then(response => {
        for(var i in response){
        this.repo.push(response[i])
        // this.repo.name = response.name
        // this.repo.html_url = response.html_url
        // this.repo.created_at = response.created_at

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