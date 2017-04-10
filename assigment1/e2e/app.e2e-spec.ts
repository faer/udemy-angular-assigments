import { Assigment1Page } from './app.po';

describe('assigment1 App', () => {
  let page: Assigment1Page;

  beforeEach(() => {
    page = new Assigment1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
