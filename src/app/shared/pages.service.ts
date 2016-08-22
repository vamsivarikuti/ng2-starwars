import { Injectable } from '@angular/core';
import { Page } from './page';

@Injectable()
export class PagesService {

  pages: Page[];

  constructor() {
    this.pages = pages;
  }

}


const pages = [{
  title: 'People',
  url: 'people'
}];

// {
//   title: 'Ships',
//     url: 'ships'
// }
