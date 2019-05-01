import { PipeTransform, Pipe } from '@angular/core';

@Pipe ({
    name : 'Shorten'
})

export class ShortPipe implements PipeTransform {
    transform(value: any) {
        return value.substr(0,50);
    }
}