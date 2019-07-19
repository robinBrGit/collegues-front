import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Collegue} from "../models/collegue";
import {DataService} from "../data.service";

@Component({
  selector: 'app-collegue-details',
  templateUrl: './collegue-details.component.html',
  styleUrls: ['./collegue-details.component.css']
})
export class CollegueDetailsComponent implements OnInit {

  matricule:string;
  col:Collegue;
  constructor(private route:ActivatedRoute,private dataServ: DataService) {
    this.matricule = route.snapshot.paramMap.get("matricule");
    dataServ.rechercherCollegueParMatricule(this.matricule).subscribe(collegue=>{
      this.col = collegue;
    })
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      this.matricule = params.get('matricule');
      this.dataServ.rechercherCollegueParMatricule(this.matricule).subscribe(collegue=>{
        this.col = collegue;
      })
    })
  }


}
