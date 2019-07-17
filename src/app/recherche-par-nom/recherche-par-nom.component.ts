import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: 'app-recherche-collegue-par-nom',
    templateUrl: './recherche-par-nom.component.html',
})
export class RechercheParNomComponent implements OnInit {

    tabMatricule: string[];
    errorRecherche: boolean = false;
    errorServer:boolean = false;
    errorMatricule:boolean = false;
    errorMatriculeMsg:string;

    constructor(private dataServ: DataService) {
    }

    ngOnInit() {
    }

    rechercher(name: string) {
        this.dataServ.rechercherParNom(name)
            .subscribe(matricules => {
                    this.errorServer = false;
                    this.tabMatricule = matricules;
                    if (this.tabMatricule != null && this.tabMatricule.length > 0) {
                        this.errorRecherche = false;
                    } else this.errorRecherche = true;
                }, (error: HttpErrorResponse) => {
                    this.errorServer = true;
                }
            );
    }

    selectionerMatricule(matricule: string) {
        this.dataServ.rechercherCollegueParMatricule(matricule).subscribe(collegue => {
            this.errorMatricule = false;
            this.dataServ.publierCollegue(matricule, collegue);
        },(err:HttpErrorResponse) => {
            this.errorMatricule = true;
            this.errorMatriculeMsg = err.error;
        })
    }


}
