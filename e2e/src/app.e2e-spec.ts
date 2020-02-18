import { AppPage } from './app.po';
import {$, browser, by, element, logging} from 'protractor';
import {protractor} from "protractor/built/ptor";

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display page header', () => {
    page.navigateTo();
    expect(page.getHeader()).toEqual('LAST FRONTCAMP FIGHT');
  });

  it('should disable selector', () => {
    element(by.css("label[for='myNews']")).click();
    expect(element(by.id('resource')).getAttribute('ng-reflect-is-disabled')).toEqual('true');
  });

  it('should open create window', () => {
    element(by.css(".create-news button")).click();
    expect(browser.getCurrentUrl()).toMatch(/\/create/);
    page.navigateTo();
  });

  it('should check title and description on the editor page', () => {
    element(by.css("label[for='myNews']")).click();
    const title = element(by.css(".article .title b")).getText();
    const description = element(by.css(".article .description")).getText();
    element(by.css(".edit-button")).click();
    expect(element(by.css('.title')).getAttribute('ng-reflect-model')).toEqual(title);
    expect(element(by.css('.description')).getAttribute('ng-reflect-model')).toEqual(description);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
