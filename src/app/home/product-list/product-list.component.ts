import { Component, ElementRef, Input, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ProductList } from 'src/productsList';
import { HomeService } from '../home.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertComponent } from '../alert/alert.component';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductListComponent implements OnInit {

  productList: any;
  @Input() params: any = {
    start: 0
  };
  THUMBUP_ICON = `<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M14.35 43.95q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.45 0 2.525 1.05t1.075 2.55q0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm20 0q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.45 0 2.525 1.05t1.075 2.55q0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm-22.6-33 5.5 11.4h14.4l6.25-11.4Zm-1.5-3H39.7q1.6 0 2.025.975.425.975-.275 2.175L34.7 23.25q-.5.85-1.4 1.475-.9.625-1.95.625H16.2l-2.8 5.2h24.55v3h-24.1q-2.1 0-3.025-1.4-.925-1.4.025-3.15l3.2-5.9L6.45 7h-3.9V4H8.4Zm7 14.4h14.4Z"/></svg>`;
  constructor(private _snackBar: MatSnackBar, private service: HomeService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('star-rating', sanitizer.bypassSecurityTrustHtml(this.THUMBUP_ICON));
  }

  ngOnInit(): void {
    this.service.productList.subscribe((res: any) => {
      if (res) {
        this.productList = res;
      }
    })

  }

  getNextProducts(page?: Number) {
    this.params.start = page ? page : this.params.start + 1;
    this.service.getProductsList(this.params).subscribe((res: any) => {
      this.service.setProductList(res['data']);
    })
  }

  getPreviousProducts() {
    if (this.params.start > 1) {
      this.params.start -= 1;
      this.service.getProductsList(this.params).subscribe((res: any) => {
        this.service.setProductList(res['data']);
      })
    }

  }

  openSnackBar(product:any) {
    if(!product.checked){
      this._snackBar.openFromComponent(AlertComponent, {
        duration: 2000,
      });
    }

  }
}
