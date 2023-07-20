// cart.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private cartSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(this.cartItems);

  addToCart(item: any) {
    this.cartItems.push(item);
    this.cartSubject.next(this.cartItems);
  }

  getCartItems() {
    return this.cartSubject.asObservable();
  }

  clearCart() {
    this.cartItems = [];
    this.cartSubject.next(this.cartItems);
  }
}
