import { Component, OnInit, Output, ViewEncapsulation,EventEmitter  } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  search: any;
  timer:any;
  @Output() emitParams: any = new EventEmitter();
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(event?: any) {

    let params = {
      searchTerm: event ? event.target.value : "Book",
      start: 0,
      itemPerPage: 24
    }
    this.emitParams.emit(params);
    this.homeService.getProductsList(params).subscribe((res: any) => {
      console.log(res);
      this.homeService.setProductList(res['data']);
    })
  }

  getList(event?:any){
    this.timer= setTimeout(() => {
      this.getProducts(event);
    }, 1500);
  }

}
