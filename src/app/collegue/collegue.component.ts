import {Component, OnDestroy, OnInit} from '@angular/core';
import {Collegue, CollegueUpdate} from "../models/collegue";
import {DataService} from "../data.service";
import {Subscription} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: 'app-collegue',
    templateUrl: './collegue.component.html',
})
export class CollegueComponent implements OnInit,OnDestroy {

    col: Collegue;
    actionSub: Subscription;
    isUpdate: boolean = false;
    error:Map<string,boolean> = new Map<string, boolean>([['email',false],['photoUrl',false]]);
    colUpdate :CollegueUpdate;

    constructor(private dataServ: DataService) {

    }

    ngOnInit() {
        this.actionSub=this.dataServ.abonnementCollegue()
            .subscribe(collegue => {
                this.col = collegue;
                this.colUpdate = new CollegueUpdate(collegue.matricule,collegue.email,collegue.photoUrl);
            });
    }

    addNewCollegue() {
        console.log("Création d'un nouveau collègue");
    }

    updateCollegue(col: Collegue) {
        this.isUpdate = true;
    }

    validateCollegue() {
        this.dataServ.updateCollegue(this.colUpdate).subscribe(collegue=>{
            this.col.email = this.colUpdate.email;
            this.col.photoUrl = this.colUpdate.photoUrl;
            this.isUpdate = false;
            this.error.set('email',false);
            this.error.set('photoUrl',false);
        }, (err:HttpErrorResponse)=>{
            if(err.error === "Email invalide")this.error.set('email',true);
            else this.error.set('email',false);
            if(err.error === "photoUrl invalide")this.error.set('photoUrl',true);
            else this.error.set('photoUrl',false);
            console.log(err.message+" "+err.error);
        });
    }

    ngOnDestroy(){
        this.actionSub.unsubscribe();
    }

}
