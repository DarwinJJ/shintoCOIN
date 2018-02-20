import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component'
import { MineCoinsComponent } from './mine-coins/mine-coins.component'
import { BuyCoinsComponent } from './buy-coins/buy-coins.component'
import { SellCoinsComponent } from './sell-coins/sell-coins.component'
import { BrowseLedgerComponent } from './browse-ledger/browse-ledger.component'

const routes: Routes = [
    { path: 'home-page', component: HomePageComponent },
    { path: 'mine-coins', component: MineCoinsComponent },
    { path: 'buy-coins', component: BuyCoinsComponent },
    { path: 'sell-coins', component: SellCoinsComponent },
    { path: 'browse-ledger', component: BrowseLedgerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
