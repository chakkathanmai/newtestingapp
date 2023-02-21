import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddBillComponent } from './modules/admin/bills/add-bill/add-bill.component';
import { BillsComponent } from './modules/admin/bills/bills.component';
import { UserDetailsComponent } from './modules/admin/user-details/user-details.component';
import { UsersComponent } from './modules/admin/users/users.component';
import { LoginComponent } from './modules/auth/login/login.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'admin', component: UsersComponent},
  { path: 'user/:id', component: UserDetailsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'bills',
    component: BillsComponent,
    children: [
      {
        path: ':add',
        component: AddBillComponent,
      },
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
