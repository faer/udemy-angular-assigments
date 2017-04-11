import { Assigments2Page } from './app.po';

describe('assigments2 App', () => {
  let page: Assigments2Page;

  beforeEach(() => {
    page = new Assigments2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
