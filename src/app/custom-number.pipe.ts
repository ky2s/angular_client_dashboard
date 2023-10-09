import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'transformWithRp'
})
export class TransformWithRpPipe implements PipeTransform {
  transform(value: number): string {
    const formattedValue = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `Rp${formattedValue}`;
  }
}

@Pipe({
  name: 'transformWithoutRp'
})
export class TransformWithoutRpPipe implements PipeTransform {
  transform(value: number): string {
    const formattedValue = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return formattedValue;
  }
}

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {
  private datePipe: DatePipe;

  constructor() {
    this.datePipe = new DatePipe('en-US');
  }

  transform(value: string): string {
    const formattedDate = this.datePipe.transform(value, 'dd MMM yyyy h:mm a');
    return formattedDate || '';
  }
}
