import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {CollegueComponent} from './collegue/collegue.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { CreerCollegueComponent } from './creer-collegue/creer-collegue.component';
import { GestionCollegueComponent } from './gestion-collegue/gestion-collegue.component';
import { UrlValidatorDirective } from './validators/url-validator.directive';
import { EmailValidatorDirective } from './validators/email-validator.directive';


@NgModule({
    declarations: [
        AppComponent,
        CollegueComponent,
        RechercheParNomComponent,
        GestionCollegueComponent,
        CreerCollegueComponent,
        UrlValidatorDirective,
        EmailValidatorDirective

    ],
    imports: [
        BrowserModule, NgbModule , HttpClientModule , FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}
