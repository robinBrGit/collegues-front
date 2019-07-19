import {Routes} from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {GallerieCollegueComponent} from "./gallerie-collegue/gallerie-collegue.component";
import {CollegueDetailsComponent} from "./collegue-details/collegue-details.component";

export const ROUTES: Routes = [
    {path: 'accueil', component: AccueilComponent},
    {path: 'gallerie',component: GallerieCollegueComponent},
    {path: 'gallerie/:matricule', component: CollegueDetailsComponent}
];
