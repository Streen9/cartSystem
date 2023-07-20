import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'chunk' })
export class ChunkPipe implements PipeTransform {
  transform(array: any[], chunkSize: number): any[][] {
    if (!array) return [];

    const chunks = [];
    let index = 0;
    
    while (index < array.length) {
      chunks.push(array.slice(index, index + chunkSize));
      index += chunkSize;
    }

    return chunks;
  }
}
