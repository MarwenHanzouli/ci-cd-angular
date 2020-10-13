import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('h1')).getText() as Promise<string>;
  }
  getPoints(): Promise<string> {
    return element(by.cssContainingText('div', 'Points')).$('span').getText() as Promise<string>;
  }

  getPlus1Button(): ElementFinder {
    return element(by.cssContainingText('button', 'Plus 1')) ;
  }

  getResetButton(): ElementFinder {
    return element(by.cssContainingText('button', 'Reset'));
  }
}
