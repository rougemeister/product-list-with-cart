import { Component } from '@angular/core';
import dessertData from  '../../../assets/data/data.json'

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  desserts = dessertData;
  


}
