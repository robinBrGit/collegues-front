import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {catchError, filter, map, tap} from "rxjs/operators";
import {Collegue, CollegueIdentite} from "./models/collegue";
import {Router} from "@angular/router";
import {BehaviorSubject, Observable, of, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isConnected:boolean;
  private collegueIdentite = new BehaviorSubject<CollegueIdentite>(new CollegueIdentite());
  constructor(private http: HttpClient,private router :Router) { }

  publier(collegueIdent:CollegueIdentite){
    this.collegueIdentite.next(collegueIdent);
  }

  abonnementCollegue() : Observable<CollegueIdentite>{
    return this.collegueIdentite.asObservable().pipe(
        filter(col => col.matricule != undefined)
    );
  }

  resetCollegue(){
    this.collegueIdentite.next(new CollegueIdentite());
  }

  login(email: string, password: string) {
    const URL_BACKEND = environment.backendUrl;
    return this.http.post<any>(`${URL_BACKEND}auth`, { email: email, motDePasse: password }).pipe(
        tap(()=>{
          this.isConnected = true;
        })
    )
  }

  logout() {
    // delete cookies AUTH
    const URL_BACKEND = environment.backendUrl;
    return this.http.post(`${URL_BACKEND}logout`,null).pipe(
        tap(()=>{
          this.isConnected = false;
        })
    )
  }

  getColegueIdentite(){
    const URL_BACKEND = environment.backendUrl;
    return this.http.get<CollegueIdentite>(`${URL_BACKEND}me`,).pipe(
        tap(collegueIdent =>{
          this.publier(collegueIdent);
        })
    )
  }

  getRoles(){
    const URL_BACKEND = environment.backendUrl;
    return this.http.get<CollegueIdentite>(`${URL_BACKEND}me`,).pipe(
        tap(collegueIdent =>{
          this.publier(collegueIdent);
        }),
        map(collegueIdent=>{
          return collegueIdent.roles;
        })
    )
  }
}
