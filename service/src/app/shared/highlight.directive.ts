import { Directive, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[app-highlight]'
})
export class HighlightDirective {

    constructor(private _el: ElementRef, private _renderer: Renderer) {

    }

    backgroundColor: string = '#ffffff';

    @HostListener('mouseenter') 
    mouseover() {
        this._renderer.setElementStyle(this._el.nativeElement, "background-color", "#9ac55878");
    }

    @HostListener('mouseleave')
    mouseleave() {
        this._renderer.setElementStyle(this._el.nativeElement, "background-color", "#ffffff");
    }

}