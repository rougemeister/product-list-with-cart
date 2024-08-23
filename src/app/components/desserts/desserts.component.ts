import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ProductComponent } from '../product/product-card.component';

@Component({
  selector: 'app-desserts',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './desserts.component.html',
  styleUrl: './desserts.component.scss'
})
export class DessertsComponent {
  products: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getItems().subscribe(data => {
      this.products = data;
      console.log(this.products[0])
    });
  }
}
