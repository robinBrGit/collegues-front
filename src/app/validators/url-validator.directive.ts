import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
    selector: '[appUrlValidator]',
    providers: [{provide: NG_VALIDATORS, useExisting: UrlValidatorDirective, multi: true}]
})
export class UrlValidatorDirective implements Validator{

    constructor() {
    }

    validate(control: AbstractControl): ValidationErrors | null {
        console.log('validator', control.value);
        // En cas de règle respecté (value commence par http), retourner null
        // Sinon retourner l'objet { urlInvalide : true }
        return  control.value && control.value.toString().startsWith('http') ?  null : { urlInvalide : true};

    }

}
