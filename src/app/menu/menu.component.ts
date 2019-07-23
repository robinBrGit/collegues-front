import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication.service";
import {Router} from "@angular/router";
import {catchError} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {Subscription} from "rxjs";
import {CollegueIdentite} from "../models/collegue";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  collIdent:CollegueIdentite;
  actionSub:Subscription;
  constructor(private authService :AuthenticationService,
              private router:Router) { }

  ngOnInit() {
    this.actionSub = this.authService.abonnementCollegue()
        .subscribe(collegueIdent=>{
          this.collIdent = collegueIdent;
        })
  }

  logout(){
    this.authService.logout().subscribe(()=>{
      this.authService.resetCollegue();
      this.router.navigate(['/login']);
    },(err:HttpErrorResponse)=>{
      console.log("deconnexion impossible");
    })
  }

}
