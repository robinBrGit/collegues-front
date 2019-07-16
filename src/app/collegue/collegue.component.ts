import { Component, OnInit , Input } from '@angular/core';
import {Collegue} from "../models/collegue";

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
})
export class CollegueComponent implements OnInit {

  @Input() col:Collegue;

  isUpdate:boolean = false;

  constructor() { }

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
