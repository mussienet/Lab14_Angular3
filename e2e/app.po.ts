import { browser, element, by } from 'protractor';

export class Lab14AssignmentPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
