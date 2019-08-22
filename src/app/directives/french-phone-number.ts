import { Directive } from '@angular/core';

import { InputFormater } from './input-formater';

@Directive({
    selector: 'input[french-phone-number]',
    host: {
        '(input)': 'formatInputWhenCursorAtTheEnd($event.target)',
        '(blur)': 'formatInput($event.target)',
    }
})
export class FrenchPhoneNumberDirective extends InputFormater  {

    public format(value: string) {
        if (value.match(/^[0-9 ]*$/)) {
            return value.replace(/ /g,'').replace(/([0-9]{2})/g,"$1\ ").trim();
        } else {
            return value;
        }
    }

}