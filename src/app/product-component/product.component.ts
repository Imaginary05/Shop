import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../category.enum';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: string;
  @Output() add: EventEmitter<string> = new EventEmitter<string>;

  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;

  constructor() { }

  ngOnInit() {
  }

  onBuy(product: any): void {
    console.log(`${product.name} added to your shop list `);
    this.add.emit(product.name);
  }

}
