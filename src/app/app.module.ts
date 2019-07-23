import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {CollegueComponent} from './collegue/collegue.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreerCollegueComponent } from './creer-collegue/creer-collegue.component';
import { GestionCollegueComponent } from './gestion-collegue/gestion-collegue.component';
import { UrlValidatorDirective } from './validators/url-validator.directive';
import { EmailValidatorDirective } from './validators/email-validator.directive';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import {RouterModule} from "@angular/router";
import {ROUTES} from "./app.routes";
import { GallerieCollegueComponent } from './gallerie-collegue/gallerie-collegue.component';
import { CollegueDetailsComponent } from './collegue-details/collegue-details.component';
import { AuthComponent } from './auth/auth.component';
import {HttpCollegueInterceptor} from "./_helpers/http-interceptor";
import { AproposComponent } from './apropos/apropos.component';


@NgModule({
    declarations: [
        AppComponent,
        CollegueComponent,
        RechercheParNomComponent,
        GestionCollegueComponent,
        CreerCollegueComponent,
        UrlValidatorDirective,
        EmailValidatorDirective,
        MenuComponent,
        AccueilComponent,
        GallerieCollegueComponent,
        CollegueDetailsComponent,
        AuthComponent,
        AproposComponent

    ],
    imports: [
        BrowserModule, NgbModule, HttpClientModule, FormsModule, RouterModule.forRoot(ROUTES), ReactiveFormsModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HttpCollegueInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
