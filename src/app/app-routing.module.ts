import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FacturesComponent } from './factures/factures.component';
import { FactureViewComponent } from './facture-view/facture-view.component';
import { FacturesCloseComponent } from './factures-close/factures-close.component';
import { CreateClientComponent } from './create-client/create-client.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',component: HomeComponent},
  { path: 'factures',component: FacturesComponent},
  { path: 'facture-view',component: FactureViewComponent},
  { path: 'facture-close',component: FacturesCloseComponent},
  { path: 'facture-create',component: CreateClientComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
