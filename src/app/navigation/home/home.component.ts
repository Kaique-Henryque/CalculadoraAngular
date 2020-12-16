import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: [],
})
export class HomeComponent {
  public result: string = "";
  public expression: string = "";
  public confirm: boolean = false;
  public valid: boolean = true;

  addExpression(newinput: string) {
    this.confirm = false;
    this.expression = this.expression + newinput;
    this.valid = true;
  }

  showResult() {
    if (!this.valid) this.expression = this.expression.slice(0, -1);
    this.result = eval(this.expression);
    this.confirm = true;
  }

  cleanExpression() {
    this.expression = "";
    this.result = "";
  }

  removeLast() {
    this.expression = this.expression.slice(0, -1);
    if (this.confirm) this.result = "";
  }

  changeOperator(operator: string) {
    if (this.expression == "") return;
    if (!this.valid) this.expression = this.expression.slice(0, -1);
    this.expression += operator;
    this.valid = false;
  }
}
