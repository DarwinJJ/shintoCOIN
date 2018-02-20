import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
    numbers = [1,2,3,4];
    coinValue = 1;
    transNumber = 1;
    allTransactions = []
    coinsEarned = 0;
    allInfo: any;

    constructor(private _http: HttpClient) { }

    pullTransactions() {
        console.log("Pulling all transactions!")
        return this.allTransactions;
    }

    addToNumbers(num) {
        this.numbers.push(num);
    }

    mineCoin() {
        this.allTransactions.push({ transactionNumber: this.transNumber.toString(), action: "Mined", amount: "1", value: this.coinValue.toString(), transId: Math.floor(Math.random()*10000) })
        this.coinValue++;
        this.transNumber++;
        this.coinsEarned++;
    }

    buyCoins(amountBought) {
        this.allTransactions.push({ transactionNumber: this.transNumber.toString(), action: "Bought", amount: `${amountBought}`, value: this.coinValue.toString(), transId: Math.floor(Math.random()*10000) })
        this.coinValue += amountBought;
        this.transNumber++;
        this.coinsEarned += amountBought;
    }

    sellCoins(amountSold) {
        if (amountSold > this.coinsEarned) {
            return
        } else {
            this.allTransactions.push({ transactionNumber: this.transNumber.toString(), action: "Sold", amount: `${amountSold}`, value: this.coinValue.toString(), transId: Math.floor(Math.random()*10000) })
            this.coinValue -= amountSold;
            this.transNumber++;
            this.coinsEarned -= amountSold;
        }
    }

    pullCoinInfo() {
        this.allInfo = { coinValue: this.coinValue, transNumber: this.transNumber, coinsEarned: this.coinsEarned }
        return this.allInfo;
    }


}
