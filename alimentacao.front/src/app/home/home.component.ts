import { Component, OnInit } from '@angular/core';
import { AlimentacaoService } from '../services/alimentacao.service';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { MatTableDataSource } from '@angular/material/table';
// import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  orderList: any;

  // displayedColumns: string[] = ['select', 'code', 'correlationId', 'createdAt', 'id'];
  // dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  // dataSource: any;
  // selection = new SelectionModel<any>(true, []);

  constructor(private orderService: AlimentacaoService) { }

  ngOnInit() {
    this.orderService.getWithDetail()
      .subscribe((res: any) => {
        this.orderList = JSON.parse(res);
        // this.dataSource = new MatTableDataSource<any>(this.orderList);
        console.log(this.orderList);
      });
  }

  confirma(item){
    //this.orderList = this.orderList.filter(item =>{item.id != id});
    const index = this.orderList.indexOf(item);
    this.orderList.splice(index, 1);

  }

}
