import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './components/product/product-card.component';
import { DataService } from './services/data.service';
import { CartComponent } from "./components/cart/cart.component";
import { DessertsComponent } from './components/desserts/desserts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent, CartComponent, DessertsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'product-list-with-cart';


}
