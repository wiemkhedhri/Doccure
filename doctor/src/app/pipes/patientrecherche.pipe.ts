import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'patientrecherche'
})
export class PatientrecherchePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
