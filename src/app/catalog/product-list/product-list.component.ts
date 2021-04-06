import { Component, OnInit, ViewChild, ViewChildren, QueryList  } from '@angular/core';
import { Product } from '../../product';
import { ProductItemComponent } from '../product-item/product-item.component';
import{BackendService} from'../../backend.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @ViewChildren(ProductItemComponent)
  productItems!: QueryList<ProductItemComponent>;
  arrayProducts: Product[];

  constructor( private backendService: BackendService) {
    this.arrayProducts = [];
  }

  ngOnInit(): void {
    this.arrayProducts = this.backendService.getProducts();
  }

  selectedProduct(productComponent: ProductItemComponent){
    alert(`สินค้า ${productComponent.product1.name} ถูกเลือก`);
    this.productItems.forEach(p => {
      p.isSelected = false;
    });
    productComponent.isSelected = true;
  }
}
