import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rechercherendezvous'
})
export class RechercherendezvousPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
