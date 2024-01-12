import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {

  champs:string[]=[]
  champsValue:Record<string,string>={}
  newChamp:string=""
  constructor() { }

  ngOnInit(): void {
    this.champsValue['name']=""
    this.champsValue['facture']=""
    this.champsValue['adresse']=""
    this.champsValue['origine']=""
  }

  addChamp(): void {
    this.champs.push(this.newChamp)
    this.champsValue[this.newChamp]=""
    this.newChamp=""
  }
  save(){
    console.log(this.champsValue)
  }
}
