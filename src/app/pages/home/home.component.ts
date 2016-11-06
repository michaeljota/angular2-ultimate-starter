import { Component, OnInit } from '@angular/core';

import { TitleService } from './../../services';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'my-home'
  selector: 'my-home',  // <my-home></my-home>
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './home.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  // Set our default values
  public localState = { value: '' };
  // TypeScript public modifiers
  constructor(public title: TitleService) {

  }

  public ngOnInit(): void {
    console.info('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }
}
