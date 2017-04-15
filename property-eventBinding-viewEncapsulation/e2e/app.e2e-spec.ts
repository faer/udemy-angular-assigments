import { PropertyEventBindingViewEncapsulationPage } from './app.po';

describe('property-event-binding-view-encapsulation App', () => {
  let page: PropertyEventBindingViewEncapsulationPage;

  beforeEach(() => {
    page = new PropertyEventBindingViewEncapsulationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
