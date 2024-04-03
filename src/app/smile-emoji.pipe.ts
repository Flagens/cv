import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'smileEmoji'
})
export class SmileEmojiPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/:\)/g, '😊');
  }
}
//&#128540;