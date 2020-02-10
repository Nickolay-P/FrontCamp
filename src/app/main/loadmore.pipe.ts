import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loadMore'
})

export class LoadMorePipe implements PipeTransform {
  transform(items, condition) {
    if(!items) return [];
    if(!condition) {
      return items.slice(0, 4);
    }
    return items;
  }
}
