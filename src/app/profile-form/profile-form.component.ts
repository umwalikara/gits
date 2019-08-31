import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {
  
  goToUrl(username){
    this.router.navigate(['/search', username])
  }
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
