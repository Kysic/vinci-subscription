export abstract class InputFormater {

    formatInputWhenCursorAtTheEnd(input: any) {
        if (input.value && input.selectionStart === input.value.length) {
            this.formatInput(input);
        }
    }

    formatInput(input: any) {
        try {
            if (input.value) {
                const newValue = this.format(input.value);
                if (newValue != input.value) {
                    input.value = newValue;
                    input.dispatchEvent(new Event('input'));
                }
            }
        } catch (e) {
            console.log('[WARN] unable to format ' + input.value, e);
        }
    }

    abstract format(string): string;
}
