import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-sell-coins',
  templateUrl: './sell-coins.component.html',
  styleUrls: ['./sell-coins.component.css']
})

export class SellCoinsComponent implements OnInit {

    coinInfo: any;
    coinsToSell: Number;

    constructor(private _shinto: HttpService) { }

    ngOnInit() {
        this.coinInfo = this._shinto.pullCoinInfo();
    }

    sellCoins() {
        if(this.coinsToSell > this.coinInfo.coinsEarned) {
            this.coinsToSell = this.coinInfo.coinsEarned;
        }
        this._shinto.sellCoins(parseInt(this.coinsToSell));
        this.coinInfo = this._shinto.pullCoinInfo();
        this.coinsToSell = 0;
    }

}