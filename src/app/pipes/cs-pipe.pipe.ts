import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'csPipe'
})
export class CsPipePipe implements PipeTransform {

  transform(text: string): string {
    return text ? text.replace(/<\/?[^>]+>/ig, " "):""
  }

}
