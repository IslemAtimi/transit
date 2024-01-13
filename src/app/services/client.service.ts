import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { initializeApp } from '@angular/fire/app';
import { Firestore, collectionData,doc,getDoc , getDocs, addDoc, collection ,query, getFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { firebaseConfig } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

constructor(public firestore: Firestore) { }

async createClient() {
  console.log("--------------+++++++++")
  const docRef = await addDoc(collection(this.firestore, 'client'), {
    name: "atchi",
    prenom: "zaki",
    age: 19
  });
  console.log("Document written with ID: ", docRef.id);
  console.log(docRef)
}

async readClients() {
  return (
    await getDocs(query(collection(this.firestore, 'client')))
   ).docs.map((robots) => robots.data());
}

async getCollectionData(){
  const querySnapshot = await getDocs(collection(this.firestore, "client"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
}
}
