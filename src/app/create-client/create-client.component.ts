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

  champsFacture:string[]=["Frais debarquement","Overture de dossier","Frais de suivi"	,
    "Surestaries",	
    "H.S  douane",
    "Complement visite",	
    "Complement Magasinage",
    "Pesage",
    "Institut pasteur",	
    "Recherche nucleaire",
    "Timbre",	
    "Facture Vide",	
    "Frais douanes"	
    ]
  champsValueFacture:Record<string,string>={}
  newChampFacture:string=""

  width:string="w-2"
  color:string[]=["text-blue-600","",""]
  step:number=0
  constructor() { }

  ngOnInit(): void {
    this.champsValue['name']=""
    this.champsValue['facture']=""
    this.champsValue['adresse']=""
    this.champsValue['origine']=""

    this.champsFacture.forEach((champ)=>{
      this.champsValueFacture[champ]=""
    })
  }

  addChamp(): void {
    this.champs.push(this.newChamp)
    this.champsValue[this.newChamp]=""
    this.newChamp=""
  }
  saveEntete(){
    console.log(this.champsValue)
    this.step++
    this.nextStep(1)
  }


  addChampFacture(){
    this.champsFacture.push(this.newChamp)
    this.champsValueFacture[this.newChamp]=""
    this.newChamp=""
  }


  nextStep(step:number){
    if(step==1){
    this.width="w-1/2"
    this.color=["text-blue-600","text-blue-600",""]
    }
    else{//2
      this.width="w-full"
      this.color=["text-blue-600","text-blue-600","text-blue-600"]
    }
  }
  previousStep(step:number){
    if(step==1){
      this.width="w-1/2"
      this.color=["text-blue-600","text-blue-600",""]
    }
    else{//0
      this.width="w-2"
      this.color=["text-blue-600","",""]
    }
  }
}
