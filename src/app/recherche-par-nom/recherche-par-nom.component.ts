import { Component, OnInit } from '@angular/core';
import {tabMatricule} from "../mock/matricules.mock";

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-par-nom.component.html',
})
export class RechercheParNomComponent implements OnInit {

  tabMatricule:any;
  errorRecherche:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  rechercher(name:string){
    if(name === 'Thomas'){
      this.tabMatricule = tabMatricule;
      this.errorRecherche = false;
    }
    else {
      this.tabMatricule = null;
      this.errorRecherche = true;
    }
  }

}
