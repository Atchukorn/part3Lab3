import { Component, OnInit, ViewChild} from '@angular/core';
import { ProductListComponent } from './catalog/product-list/product-list.component';
import {BackendService} from './backend.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit  {
  title = 'part3Lab2';
  // @ViewChild('productList', {static:true})
  // productList!: ProductListComponent;
  // constructor(private backendservice : BackendService) {};
  ngOnInit() : void{
    // this.productList.arrayProducts = this.backendservice.getProducts();

  }

}
