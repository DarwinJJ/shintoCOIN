import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-browse-ledger',
  templateUrl: './browse-ledger.component.html',
  styleUrls: ['./browse-ledger.component.css']
})
export class BrowseLedgerComponent implements OnInit {
    allTransactions: any;
    detailsPressed = false;
    detail = { transNumber: "", mined: "" }

    constructor(private _shinto: HttpService) { }

    ngOnInit() {
        this.getAllTransactions();
    }

    getAllTransactions() {
        this.allTransactions = this._shinto.pullTransactions();
        console.log("Got all transactions!")
    }

    getTransDetails(transactionID) {

        console.log("Getting transaction details")
        console.log("Transaction ID", transactionID)
        console.log("All ID", this.allTransactions[0].transId)

        for (var transaction of this.allTransactions) {
            if (transactionID == transaction.transId) {
                this.detail.transNumber = transaction.transactionNumber;
                this.detail.mined = `${transaction.action} ${transaction.amount}`;
            }
        }
        this.detailsPressed = true;
    }

}
