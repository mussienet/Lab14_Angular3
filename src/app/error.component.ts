import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `<h1> ERROR!</h1>
    <p>
      Please check the value you entered.
    </p>
  `,
  styles: []
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
