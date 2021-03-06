import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './../IProduct.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent implements OnInit {
  product: IProduct = {
    name: '',
    price: null,
  };

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage({
        msg: 'Produto criado!',
      });
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {}
}
