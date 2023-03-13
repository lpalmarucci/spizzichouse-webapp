import { Directive, ElementRef, HostBinding, Renderer2 } from '@angular/core';
import { LoaderService } from './loader.service';

@Directive({
  selector: '[httpLoader]'
})
export class LoaderDirective{

  @HostBinding('style.position') hostPosition: string = "relative";

  private loaderContainer: any;
  private loaderOverlay: any;

  constructor(private renderer: Renderer2, private elementRef: ElementRef, private loaderService: LoaderService) {
    this.init()
  }

  ngOnInit(): void {
    this.loaderService.loaderId$.subscribe(loading => {
      if(loading){
        this.renderer.appendChild(this.elementRef.nativeElement, this.loaderContainer);
        this.renderer.appendChild(this.elementRef.nativeElement, this.loaderOverlay);
      } else {
        this.renderer.removeChild(this.elementRef.nativeElement, this.loaderContainer);
        this.renderer.removeChild(this.elementRef.nativeElement, this.loaderOverlay);
      }
    })
  }

  init(){
    this.loaderContainer = this.renderer.createElement('div');
    this.loaderOverlay = this.renderer.createElement('div')
    this.renderer.addClass(this.loaderContainer, 'loader-container')

    this.renderer.setProperty(this.loaderContainer,'innerHTML', '<i class="pi pi-spin pi-spinner" style="font-size: 7rem"></i>')
    this.renderer.addClass(this.loaderOverlay, 'loader-overlay');
  }

}
