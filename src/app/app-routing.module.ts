import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'profile-form', component: ProfileFormComponent},
  { path: 'search/:username', component: SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
