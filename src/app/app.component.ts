import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result = false;
  num = 0;
  mode = "0";

  constructor(private ref: ChangeDetectorRef){}

  handleNumberChange (event: any) {
    if (!this.num && this.num !== 0) return

    if (this.num < 0) {
      this.num = 1;
    } else {
      this.ref.detectChanges();
      this.num = Math.round(this.num);
    }

    this.handleCheck();
  }

  handleModeChange (event: any) {
    this.mode = event.target.value;
    this.handleCheck();
  }

  handleCheck () {
    if (this.mode === "0") {
      this.result = this.checkIsPrimeNumber(this.num);
    } else {
      this.result = this.checkIsFibonacci(this.num)
    }
  }

  checkIsPrimeNumber(input: any) {
    for(let i = 2; i < input; i++)
      if(input % i === 0) return false;
    return input > 1;
  }

  checkIsFibonacci(input: any) {
    if(input === 0 || input === 1){
      return true;
    }
    let prev = 1;
    let count = 2;
    let temp = 0;
    while(count <= input){
      if(prev + count === input){
        return true;
      };
      temp = prev;
      prev = count;
      count += temp;
    };
    return false;
  }
}
