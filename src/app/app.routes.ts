import {Routes} from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {GallerieCollegueComponent} from "./gallerie-collegue/gallerie-collegue.component";
import {CollegueDetailsComponent} from "./collegue-details/collegue-details.component";
import {AuthComponent} from "./auth/auth.component";
import {AuthGuard} from "./auth.guard";
import {AproposComponent} from "./apropos/apropos.component";

export const ROUTES: Routes = [
    { path: '', component: AuthComponent },
    {path: 'accueil', component: AccueilComponent,canActivate: [AuthGuard]},
    {path: 'gallerie',component: GallerieCollegueComponent,canActivate: [AuthGuard]},
    {path: 'gallerie/:matricule', component: CollegueDetailsComponent,canActivate: [AuthGuard]},
    {path: 'apropos', component: AproposComponent},


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
