export default abstract class Aside {

    protected aside: HTMLElement;
    protected controls: HTMLElement|HTMLCollection;
    protected show: boolean;

    protected constructor(aside: HTMLElement, controls: HTMLElement|HTMLCollection) {

        if(!aside) return;

        this.aside = aside;
        this.controls = controls;
        this.show = this.aside.getAttribute('data-show') === 'true';

        this.initEvent();
    }

    initEvent(): void {
        if (this.controls instanceof HTMLCollection) {
            for (let item of [].slice.call(this.controls)) {
                item.addEventListener('click', (e: Event) => {
                    this.animate(item);
                })
            }
        } else {
            this.controls.addEventListener('click', (e: Event) => {
                this.animate(<HTMLElement> this.controls);
            })
        }
    }

    abstract animate(item: HTMLElement): void;
}
