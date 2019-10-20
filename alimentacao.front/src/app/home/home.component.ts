import { Component, OnInit } from '@angular/core';
import { AlimentacaoService } from '../services/alimentacao.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private orderService: AlimentacaoService) { }

  ngOnInit() {
    this.orderService.getOrders()
      .toPromise()
      .then(res => { console.log(res) });
  }

}
