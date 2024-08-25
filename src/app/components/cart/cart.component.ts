import { Component,inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../model/product';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  emptyCart: number = 0;
  cartItems: Product[] = [];

  private cartService = inject(CartService);
  private modalService = inject(ModalService)

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((data) => {
      this.cartItems = data;
      this.emptyCart = this.cartItems.length;
    });
  }

  getTotalItems(): number {
    return this.cartService.getTotalItems();
  }

  removeFromCart(product: Product): void {
    this.cartService.removeFromCart(product);
  }

  getTotalPrice() {
    return this.cartService.getTotalPrice();
  }

  openModal() {
    this.modalService.open();
  }
}
