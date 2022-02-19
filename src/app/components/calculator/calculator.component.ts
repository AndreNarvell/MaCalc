import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  result: string = '';

  longButtons: string[] = ['CE', 'C'];
  buttons: string[] = [
    '/',
    '*',
    '7',
    '8',
    '9',
    '-',
    '4',
    '5',
    '6',
    '+',
    '1',
    '2',
    '3',
    '0',
    '.',
  ];
  equal: string[] = ['='];

  private prevValue: string = '';
  private currentValue: string = '';

  addToExpression(value: string) {
    if (this.result != '') {
      this.prevValue = this.currentValue;
      this.currentValue = value;
    }

    if (value == 'CE') {
      this.result = '';
    } else if (value == 'C') {
      this.result =
        this.prevValue != '=' ? this.result.slice(0, -1) : this.result;
    } else if (value == '=') {
      this.result = eval(this.result);
    } else {
      this.result += value;
    }
  }
}
