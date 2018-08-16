import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { IProduct } from '../interfaces/iproduct';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Array<IProduct>;
  // @Output() add: EventEmitter<string> = new EventEmitter();

  constructor(public productsService: ProductsService,
    public cartService: CartService) { }

  ngOnInit() {
    this.productList = this.productsService.getProducts();
    console.log(this.productList);
  }

  onBuyProduct(product: any): void {
    console.log(product);
  }

}
