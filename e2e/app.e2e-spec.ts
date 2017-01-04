import { Ang2ExamplesDirectivesPage } from './app.po';

describe('ang2-examples-directives App', function() {
  let page: Ang2ExamplesDirectivesPage;

  beforeEach(() => {
    page = new Ang2ExamplesDirectivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
