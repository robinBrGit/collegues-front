import { Component, OnInit } from '@angular/core';
import {Collegue} from "../models/collegue";
import {DataService} from "../data.service";

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
})
export class CollegueComponent implements OnInit {

  col:Collegue;

  isUpdate:boolean = false;

  constructor(private dataServ:DataService) {
    this.col = dataServ.recupererCollegueCourant();
  }

  ngOnInit() {
  }

  addNewCollegue(){
    console.log("Création d'un nouveau collègue");
  }

  updateCollegue(col:Collegue){
    this.isUpdate = true;
  }

  validateCollegue(){
    this.isUpdate = false;
  }

}
