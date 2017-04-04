import { TestAppPage } from './app.po';

describe('test-app App', () => {
  let page: TestAppPage;

  beforeEach(() => {
    page = new TestAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
