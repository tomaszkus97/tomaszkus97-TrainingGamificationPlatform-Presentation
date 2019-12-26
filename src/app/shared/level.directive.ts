import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLevel]'
})
export class LevelDirective {

  constructor(private elementRef: ElementRef) { 
  }
  @Input() level: number

  ngOnInit() {
    console.log(this.level)
    if (this.level) {
      this.setLevelColor(this.level)
    } else {
      this.setColor('black')
    }
  }
  setLevelColor(level){
    switch(level){
      case 1: {
        this.setColor("#ff3030");
        break;
    }
    case 2: {
      this.setColor("#ff9e30");
      break;
    }
    case 3: {
    this.setColor("#5dff30");
    break;
    }
    case 4: {
      this.setColor("#f1ff30");
      break;
    }
  }
}

  setColor(color: string) {
    this.elementRef.nativeElement.style.color = color;
  }


}
