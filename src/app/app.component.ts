import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weight: number = 0;
  packages: number = 0;
  cost: number = 0;


  calculate() {
    if(this.weight > 0){
      if (this.packages>1){
        this.cost = (this.weight*220*3)+((this.packages -1 )*2*220)+1200;
      }
      else{
        this.cost = (this.weight*220*3)+1200;
      }
    
      
    }
    else{
      this.cost = 0;
    }
    }
    


}
