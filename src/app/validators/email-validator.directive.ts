import { Directive } from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";
import {Observable} from "rxjs";
import {DataService} from "../data.service";
import {map} from "rxjs/operators";

@Directive({
  selector: '[appEmailValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: EmailValidatorDirective, multi: true}]
})
export class EmailValidatorDirective implements AsyncValidator{

  constructor(private dataServ: DataService) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    return this.dataServ.isEmailExist(control.value).pipe(
        map(emailExist => emailExist ? { emailExist : true} : null)
    )
  }

}
