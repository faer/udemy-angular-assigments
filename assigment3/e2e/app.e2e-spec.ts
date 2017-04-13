import { Assigment3Page } from './app.po';

describe('assigment3 App', () => {
  let page: Assigment3Page;

  beforeEach(() => {
    page = new Assigment3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
