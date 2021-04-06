import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from '@angular/common'

// import { ProductListComponent } from './catalog/product-list/product-list.component';
// import { HomeComponent } from './home/home/home.component';
// import { LoginComponent } from './login/login.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
//   {path:'', redirectTo: '/home', pathMatch:'full'},
//   {path:'home', component: HomeComponent},
//   {path:'login', component:LoginComponent },
//   {path:'products', component:ProductListComponent },
//   {path:'**', component:PageNotFoundComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
