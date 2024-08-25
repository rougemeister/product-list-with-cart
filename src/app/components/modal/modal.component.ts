import { Component,inject} from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  isVisible: boolean = false;

  emptyCart: number = 0;
  cartItems: Product[] = [];

  private cartService = inject(CartService);
  private modalService = inject(ModalService)

  ngOnInit() {
    this.modalService.modalVisibility$.subscribe(isVisible => {
      this.isVisible = isVisible;
    });
    this.cartService.cartItems$.subscribe((data) => {
      this.cartItems = data;
      this.emptyCart = this.cartItems.length;
    });
  }


  
  getTotalPrice() {
    return this.cartService.getTotalPrice();
  }
 

  closeModal() {
    this.modalService.close();
  }
}
