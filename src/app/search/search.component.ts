import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { UserRequestService} from '../user-http/user-request.service';
// import { environment} from '../../environments/environment';
import { User } from '../user';
import { Repository } from '../repository';
import { RepoRequestService } from '../repo-http/repo-request.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // users:User[];
  user:User;
  repo:Repository[];

  constructor(private userService:UserRequestService, private repoService:RepoRequestService) {
    // this.user = new User("","",0);
   }

  ngOnInit() {
   this.userService.userRequest()
   this.user= this.userService.user

   this.repoService.repoRequest()
     this.repo= this.repoService.repo;
    //  console.log(this.repo)  
  }

}
