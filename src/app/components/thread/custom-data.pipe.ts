import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'customDate'})
export class CustomDatePipe implements PipeTransform {
  transform(value: string): string {
    const date = new Date(value);
    let day = date.getDate();
    let suffix = '';

    if (day > 3 && day < 21) {
        suffix = 'th';
    } else {
        switch (day % 10) {
            case 1:  suffix = "st"; break;
            case 2:  suffix = "nd"; break;
            case 3:  suffix = "rd"; break;
            default: suffix = "th";
        }
    }

    const month = date.toLocaleString('default', { month: 'short' });

    return `${month} ${day}${suffix}`;
  }
}
