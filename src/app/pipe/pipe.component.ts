import { CurrencyPipe, DatePipe, LowerCasePipe, NgClass, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, PercentPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, SlicePipe, PercentPipe,],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  public time = new Date()
  public name = 'Oluwapelumi'
  
  public condition = 'Red'
  public color1 = 'Red'
  public color2='Blue'

  changeColor() {
    this.condition=this.color1?this.color2:this.color1
  }
}
