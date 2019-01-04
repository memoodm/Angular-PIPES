import {Pipe, PipeTransform } from '@angular/core';
import { Type } from '@angular/compiler';

@Pipe({
    name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform{
    transform(value: string, ...args: any[]): string{
        value = value.toLocaleLowerCase();
        let values:string[] = value.split(" ");
        let result:string = "";
        for( let x=0; x<values.length;x++){
            result = result + values[x][0].toUpperCase() + values[x].slice(1) + " ";
        }
        return result;
    }
}