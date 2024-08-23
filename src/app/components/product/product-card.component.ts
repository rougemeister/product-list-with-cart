import { Component,Input,inject } from '@angular/core';
import { Product } from '../../model/product';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductComponent {
  isVisible = false;
  isDisplay = true;
  isActive = false;
  @Input()
  product!: Product;

  private cartService = inject(CartService);


  addToCart(dessert: Product): void {
    this.cartService.addToCart(dessert);
    this.isActive = true;
  }

  increaseQuantity(dessert: Product): void {
    dessert.quantity++;
  }

  decreaseQuantity(dessert: Product): void {
    if (dessert.quantity > 1) {
      dessert.quantity--;
      
     } else { 
      this.cartService.removeFromCart(dessert)
      this.toggleVisibility()
      this.isActive = false;
  
     }
  }


  toggleVisibility() {
    this.isVisible = !this.isVisible; 
    this.isDisplay = !this.isDisplay
  }  

}
