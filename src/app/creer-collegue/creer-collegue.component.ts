import {Component, OnInit} from '@angular/core';
import {CollegueAdd} from "../models/collegue";
import {DataService} from "../data.service";
import {HttpErrorResponse} from "@angular/common/http";
import {FormGroup, NgForm} from "@angular/forms";

@Component({
  selector: 'app-creer-collegue',
  templateUrl: './creer-collegue.component.html',
  styleUrls: ['./creer-collegue.component.css']
})
export class CreerCollegueComponent implements OnInit {

  collegueAdd : CollegueAdd = new CollegueAdd();

  backEndErrors:any = {};

  constructor(private dataServ: DataService) { }

  ngOnInit() {
  }


  ajouterCollegue(formAjouter: NgForm) {
    this.backEndErrors = {};
    this.dataServ.ajouterCollegue(this.collegueAdd).subscribe(matricule => {
      console.log(matricule);
      this.collegueAdd = new CollegueAdd();
      formAjouter.reset();
    }, (err:HttpErrorResponse)=>{
      if(err.status == 0){
        this.backEndErrors= { offline : "connexion interrompue"}
      }
      else this.backEndErrors = JSON.parse(err.error);
    });
  }



}
