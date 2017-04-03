import { BootstrapFormValidationPage } from './app.po';

describe('bootstrap-form-validation App', () => {
  let page: BootstrapFormValidationPage;

  beforeEach(() => {
    page = new BootstrapFormValidationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
