import {Injectable} from '@angular/core';
import {Collegue} from "./models/collegue";
import {lesCollegues, unCollegue} from "./mock/collegues.mock";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  collegues = lesCollegues;
  constructor() {
  }

  rechercherParNom(name:string): string[]{
    let matricules:string[];
    matricules = this.collegues.filter(collegue=>{
      return collegue.nom === name;
    }).map(collegue=>{
      return collegue.matricule;
    });
    return matricules;
  }

  recupererCollegueCourant(): Collegue {
    // TODO retourner le collègue fictif à partir du fichier `src/app/mock/collegues.mock.ts`.
    return unCollegue;
  }
}
