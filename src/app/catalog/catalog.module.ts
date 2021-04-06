import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{ProductItemComponent} from './product-item/product-item.component'
import{ProductListComponent} from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PanelComponent } from './panel/panel.component'

import {BackendService} from '../backend.service';


@NgModule({
  declarations: [
     ProductItemComponent,
     ProductListComponent,
     ProductDetailComponent,
     PanelComponent
  ],

   exports:[
    ProductItemComponent,
    ProductListComponent,
  ],

  imports: [ CommonModule ],

  providers: [BackendService],

})
export class CatalogModule { }
