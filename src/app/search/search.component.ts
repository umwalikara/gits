import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { UserRequestService} from '../user-http/user-request.service';
// import { environment} from '../../environments/environment';
import { User } from '../user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // users:User[];
  user:User;

  constructor(private userService:UserRequestService) {
    // this.user = new User("","",0);
   }

  ngOnInit() {
   this.userService.userRequest()
   this.user= this.userService.user    
  }

}
