import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/components/user/user.component';
import { UserDetailsComponent } from './user/components/user-details/user-details.component';

const routes: Routes = [
  {
    path: 'user', component: UserComponent
  },
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'details/:id', component: UserDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
