import { Component, OnInit } from '@angular/core';
import {PhotoDTO} from "../models/collegue";
import {DataService} from "../data.service";

@Component({
  selector: 'app-gallerie-collegue',
  templateUrl: './gallerie-collegue.component.html',
  styleUrls: ['./gallerie-collegue.component.css']
})
export class GallerieCollegueComponent implements OnInit {

  public photoCollegues:PhotoDTO[];

  constructor(private dataServ: DataService) { }

  ngOnInit() {
    this.dataServ.getPhotosCollegues().subscribe(colleguesPhotos => {
      this.photoCollegues = colleguesPhotos;
    })
  }

}
