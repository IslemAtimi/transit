import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-factures-close',
  templateUrl: './factures-close.component.html',
  styleUrls: ['./factures-close.component.scss']
})
export class FacturesCloseComponent implements OnInit {

  constructor(private http: HttpClient,
              
      ) { }

  clients: client[] = [];

  ngOnInit(): void {
    this.getClient()
  }
  
  getClient(){
    this.http.get<client[]>("/assets/data/client.json").subscribe((data)=>{
      console.log(data);
      this.clients=data
    })
  }

  // createClient(){
  //   this.clientService.createClient();
  // }


// async readRobots() {
//     this.robots = await this.clientService.readClients();
//     console.log(this.robots)
// } 

}

export interface client {
  id: number;
  numero_facture: number;
  name: string;
  adresse: string;
  nature: string;
  date: string;
  origine: string;
}
