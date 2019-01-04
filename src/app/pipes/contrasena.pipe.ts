import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean): any {
    let result = "";
    if(activar){
      for(let x=0; x<value.length ; x++){
        result = result + "*";
      }
    }
    else{
        result = value;
    }

    return result;
  }

}
