export class DomChanger {
    private element: HTMLElement;

    constructor(selector: string) {
        this.element = document.querySelector(selector);

        if (!this.element) {
            throw new Error(`No se encuentra el elemento ${this.element}`);
        }
    }

    replaceText(text: string): void {
        this.element.innerHTML = text;
    }
}
