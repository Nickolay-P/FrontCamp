import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getHeader() {
    return element(by.css('app-root .header .logo h2')).getText() as Promise<string>;
  }
}
