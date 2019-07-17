import {Injectable} from '@angular/core';
import {Collegue} from "./models/collegue";
import {Observable, of, Subject} from "rxjs";
import {unCollegue} from "./mock/collegues.mock";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private colleguesCached:Map<string,Collegue> = new Map<string, Collegue>();
  private collegueSelectionne = new Subject<Collegue>();
  constructor(private httpClient : HttpClient) {
  }

  publierCollegue(matricule:string,collegue : Collegue){
    if(!this.colleguesCached.has(matricule))
      this.colleguesCached.set(matricule,collegue);
    this.collegueSelectionne.next(collegue);
  }

  abonnementCollegue() : Observable<Collegue>{
    return this.collegueSelectionne.asObservable();
  }

  rechercherParNom(name:string) :Observable<string[]>{
    this.colleguesCached = new Map<string, Collegue>();
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
    if(!this.colleguesCached.has(matricule)){
      return this.httpClient
          .get<Collegue>(`${URL_BACKEND}/${matricule}`);
    }
    else return of(this.colleguesCached.get(matricule));


  }
}
