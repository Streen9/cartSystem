// your-component.ts

import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss'],
})
export class CartItemsComponent {
  items: any[] = [];
  selectedItem: any | null = null;

  constructor(private cartService: CartService) {
    for (let i = 0; i < 20; i++) {
      this.items.push({
        url: faker.image.url(),
        itemName: faker.word.sample(),
        description: faker.lorem.paragraph(),
      });
    }
  }

  showDescription(item: any) {
    this.selectedItem = item;
  }

  closeItem() {
    console.log(this.selectedItem);
    setTimeout(() => {
      this.selectedItem = null;
    }, 1);
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
    console.log('Adding to cart:', item);
  }
}
