import { PipeTransform, Pipe } from '@angular/core';

@Pipe ({
    name : 'Short'
})

export class ShortenPipe implements PipeTransform {
    transform(value: any) {
        return value.substr(0,18);
    }
}