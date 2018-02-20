import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-buy-coins',
  templateUrl: './buy-coins.component.html',
  styleUrls: ['./buy-coins.component.css']
})
export class BuyCoinsComponent implements OnInit {

    coinInfo: any;
    coinsToBuy: Number;

    constructor(private _shinto: HttpService) { }

    ngOnInit() {
        this.coinInfo = this._shinto.pullCoinInfo();
    }

    buyCoins() {
        this._shinto.buyCoins(parseInt(this.coinsToBuy));
        this.coinInfo = this._shinto.pullCoinInfo();
        this.coinsToBuy = 0;
    }

}
