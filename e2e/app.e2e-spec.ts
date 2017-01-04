import { Ang2DirectivesExamplesPage } from './app.po';

describe('ang2-directives-examples App', function() {
  let page: Ang2DirectivesExamplesPage;

  beforeEach(() => {
    page = new Ang2DirectivesExamplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
