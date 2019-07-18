import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-collegue',
  templateUrl: './gestion-collegue.component.html',
  styleUrls: ['./gestion-collegue.component.css']
})
export class GestionCollegueComponent implements OnInit {

  creerCollegue:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  afficherAjoutCollegue(){
    this.creerCollegue = true;
  }
  afficherCollegue(){
    this.creerCollegue = false;
  }

}
