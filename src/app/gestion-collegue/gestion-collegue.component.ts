import { Component, OnInit } from '@angular/core';
import {CollegueIdentite} from "../models/collegue";
import {Subscription} from "rxjs";
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-gestion-collegue',
  templateUrl: './gestion-collegue.component.html',
  styleUrls: ['./gestion-collegue.component.css']
})
export class GestionCollegueComponent implements OnInit {

  collIdent:CollegueIdentite;
  actionSub:Subscription;
  creerCollegue:boolean = false;
  constructor(private authService:AuthenticationService) { }

  ngOnInit() {
    this.actionSub = this.authService.abonnementCollegue()
        .subscribe(collegueIdent=>{
          this.collIdent = collegueIdent;
        })
  }

  afficherAjoutCollegue(){
    this.creerCollegue = true;
  }
  afficherCollegue(){
    this.creerCollegue = false;
  }

}
