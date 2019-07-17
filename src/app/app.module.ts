import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {CollegueComponent} from './collegue/collegue.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
    declarations: [
        AppComponent,
        CollegueComponent,
        RechercheParNomComponent,

    ],
    imports: [
        BrowserModule, NgbModule , HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}
