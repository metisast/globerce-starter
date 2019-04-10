import Aside from "./Aside";

export default class AsideShift extends Aside {

    private readonly shiftElementsClasses: Array<string>;

    constructor(aside: HTMLElement, controls: HTMLElement|HTMLCollection, shiftElementsClasses:  Array<string> = []) {
        super(aside, controls);

        this.shiftElementsClasses = shiftElementsClasses;
    }

    animate(item: HTMLElement): void {
        if (this.show) {
            this.aside.style.transform = 'translateX(-100%)';
        } else {
            this.aside.style.transform = 'translateX(0)';
        }
        AsideShift.shift(this.shiftElementsClasses, this.show);
        this.show = !this.show;
    }

    static shift(elements: Array<string>, resize: boolean = false): void {
        for (let element of elements) {
            let shiftElements: HTMLCollection = document.getElementsByClassName(element);
            for (let item of [].slice.call(shiftElements)) {
                resize ? item.classList.add('gc-pl-0') : item.classList.remove('gc-pl-0');
            }
        }
    }
}
