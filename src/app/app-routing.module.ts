import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/components/user/user.component';
import { UserDetailsComponent } from './user/components/user-details/user-details.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'user', component: UserComponent
  },
  { path: 'user/details/:id', component: UserDetailsComponent },
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  {path:'**', component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
