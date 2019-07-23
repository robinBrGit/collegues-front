import {Injectable} from '@angular/core';
import {Collegue, CollegueAdd, CollegueUpdate, PhotoDTO} from "./models/collegue";
import {Observable, of, Subject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../environments/environment";
import {map} from "rxjs/operators";

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
        .get<string[]>(`${URL_BACKEND}collegues?nom=${name}`)
  }

  rechercherCollegueParMatricule(matricule : string) : Observable<Collegue>{
    const URL_BACKEND = environment.backendUrl;
    if(!this.colleguesCached.has(matricule)){
      return this.httpClient
          .get<Collegue>(`${URL_BACKEND}collegues/${matricule}`);
    }
    else return of(this.colleguesCached.get(matricule));
  }

  updateCollegue(collegue:CollegueUpdate) : Observable<string>{

    const URL_BACKEND = environment.backendUrl;
    return this.httpClient.patch(`${URL_BACKEND}collegues/${collegue.matricule}`,collegue,{
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      responseType: 'text'
    });
  }

  ajouterCollegue(collegue:CollegueAdd) : Observable<string>{
    const URL_BACKEND = environment.backendUrl;
    return this.httpClient.post(`${URL_BACKEND}collegues`,collegue,{
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      responseType: 'text'
    });
  }

  isEmailExist(email:string) : Observable<boolean>{
    const URL_BACKEND = environment.backendUrl;
      return this.httpClient.post(`${URL_BACKEND}email`,email,{
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      responseType: 'text'
    }).pipe(
        map(
            texte => texte === 'true'
        )
      );

  }

  getPhotosCollegues() : Observable<PhotoDTO[]>{
    const URL_BACKEND = environment.backendUrl;
    return this.httpClient.get<PhotoDTO[]>(`${URL_BACKEND}collegues/photos`);
  }
}
