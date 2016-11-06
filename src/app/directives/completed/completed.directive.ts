import { Directive, ElementRef, Input, OnChanges, Renderer } from '@angular/core';

@Directive({
  selector: '[myCompleted]',
})
export class CompletedDirective implements OnChanges {
  @Input() private myCompleted: boolean;

  constructor(private el: ElementRef, private renderer: Renderer) {}

  public ngOnChanges() {
    this.renderer.setElementStyle(
      this.el.nativeElement,
      'text-decoration',
      this.myCompleted ? 'line-through' : 'none',
    );
  }
}
