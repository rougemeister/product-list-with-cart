import { Component,Input,OnInit } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductComponent  {

  @Input()
  product!: Product;



}
