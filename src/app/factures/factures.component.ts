import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.scss']
})
export class FacturesComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {

  }

  goToFacture(){
    this.route.navigate(['/facture-view',{ data: "test" }]);
  }

}
