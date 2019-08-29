import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment';
import { User } from '../user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  users:User[];
  user:User;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    interface ApiResponse{
      login:string;
      avatar_url:string;
      public_repos:number;
    }
    this.http.get<ApiResponse>("https://api.github.com/users/umwalikara?access_token="+ environment.key).subscribe(data=>{
      // Succesful API request
      this.user = new User(data.login, data.avatar_url, data.public_repos);
    })
  }

}
