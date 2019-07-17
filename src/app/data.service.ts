import {Injectable} from '@angular/core';
import {Collegue} from "./models/collegue";
import {Observable, Subject} from "rxjs";
import {lesCollegues, unCollegue} from "./mock/collegues.mock";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataService {


  private collegueSelectionne = new Subject<Collegue>();
  constructor(private httpClient : HttpClient) {
  }

  publierCollegue(collegue : Collegue){
    this.collegueSelectionne.next(collegue);
  }

  abonnementCollegue() : Observable<Collegue>{
    return this.collegueSelectionne.asObservable();
  }

  rechercherParNom(name:string) :Observable<string[]>{
    const URL_BACKEND = environment.backendUrl;
    return this.httpClient
        .get<string[]>(`${URL_BACKEND}?nom=${name}`)
  }

  recupererCollegueCourant(): Collegue {
    // TODO retourner le collègue fictif à partir du fichier `src/app/mock/collegues.mock.ts`.
    return unCollegue;
  }

  rechercherCollegueParMatricule(matricule : string) : Observable<Collegue>{
    const URL_BACKEND = environment.backendUrl;
    return this.httpClient
        .get<Collegue>(`${URL_BACKEND}/${matricule}`)
  }
}
