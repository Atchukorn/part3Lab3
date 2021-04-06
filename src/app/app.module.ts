import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CatalogModule } from './catalog/catalog.module';
import {HomeModule} from './home/home.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
// import { ProductItemComponent } from './catalog/product-item/product-item.component';
// import { ProductListComponent } from './catalog/product-list/product-list.component';
import {HomeComponent} from './home/home/home.component';

import {BackendService} from './backend.service';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductListComponent } from './catalog/product-list/product-list.component';
import { ProductDetailComponent } from './catalog/product-detail/product-detail.component';

const routes: Routes = [
    {path:'', redirectTo: '/home', pathMatch:'full'},
    {path:'home', component: HomeComponent },
    {path:'login', component: LoginComponent },
    {path:'products', component: ProductListComponent },
    {path:'products/222', component: ProductDetailComponent },
    {path:'**', component: PageNotFoundComponent },
   ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    // ProductItemComponent,
    // ProductListComponent,
  ],

  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CatalogModule,
    HomeModule,
    RouterModule.forRoot(routes),
  ],

  exports: [RouterModule],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }

/* ในการเรียกใช้
import { ProductItemComponent } from './catalog/product-item/product-item.component';
import { ProductListComponent } from './catalog/product-list/product-list.component';
สามารถเลือกเรียกใช้ที่ใดที่หนึ่ง ที่ app.module.ts หรือ catalog.ts
*/
