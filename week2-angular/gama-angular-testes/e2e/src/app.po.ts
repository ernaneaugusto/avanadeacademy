import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getCounterText(){
    return element(by.id("counter")).getText()
  }
  
  getIncrementButton(){
    return element(by.id("aumentar"))
  }
  getDecreaseButton(){
    return element(by.id("diminuir"))
  }
}
