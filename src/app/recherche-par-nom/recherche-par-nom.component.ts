import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-par-nom.component.html',
})
export class RechercheParNomComponent implements OnInit {

  tabMatricule:string[];
  errorRecherche:boolean = false;
  constructor(private dataServ:DataService) { }

  ngOnInit() {
  }

  rechercher(name:string){
    this.tabMatricule = this.dataServ.rechercherParNom(name);
    if(this.tabMatricule != null && this.tabMatricule.length > 0){
      this.errorRecherche = false;
    }
    else this.errorRecherche = true;
  }

}
