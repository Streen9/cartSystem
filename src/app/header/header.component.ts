// header.component.ts

import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  cartItemCount: number = 0;
  private cartSubscription: Subscription = Subscription.EMPTY;
  cartItemsLocal: any[] = [];
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartSubscription = this.cartService
      .getCartItems()
      .subscribe((cartItems) => {
        this.cartItemsLocal = cartItems;
        this.cartItemCount = cartItems.length;
      });
  }

  ngOnDestroy() {
    // Unsubscribe from the cartSubscription to avoid memory leaks
    this.cartSubscription.unsubscribe();
  }
  showCartItems() {
    const dialogElement = document.getElementById(
      'myDialog'
    ) as HTMLDialogElement;
    if (dialogElement !== null) {
      dialogElement.open = true;
    }
  }
  closeDialog() {
    const dialogElement = document.getElementById(
      'myDialog'
    ) as HTMLDialogElement;
    if (dialogElement != null) {
      dialogElement.open = false;
    }
    // document.getElementById("myDialog").open = false;
  }
  
  doSomething() {
    // Add your code here to perform some action when "Do Something" button is clicked
    console.log("Do Something button clicked!");
  }
}
