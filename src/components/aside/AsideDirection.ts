import Aside from "./Aside";

export default class AsideDirection extends Aside {

    private ASIDE_SHOW_CLASS: string = 'gc-aside_show';

    constructor(aside: HTMLElement, controls: HTMLElement|HTMLCollection) {
        super(aside, controls);
    }

    animate(item: HTMLElement): void {
        item.getAttribute('data-close') === 'true' ?
            this.aside.classList.remove(this.ASIDE_SHOW_CLASS) : this.aside.classList.add(this.ASIDE_SHOW_CLASS);
        this.show = !this.show;
    }
}
